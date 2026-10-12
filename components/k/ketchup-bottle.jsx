import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u5q5-zzyw {
  d: path("M12 13.75c-1.2-.5-2.5.3-2.5 1.85a2.5 2.5 0 0 0 5 0c0-1.55-1.3-2.35-2.5-1.85");
}

.um782re5x {
  width: 10px;
  height: 12.25px;
  x: 7px;
  y: 9px;
  rx: 2px;
}

.vr56yfayh {
  d: path("M10.1 9h3.8q.6 0 .38-.56l-2.06-5.13q-.22-.56-.44 0L9.72 8.44Q9.5 9 10.1 9");
}
</style><g class="hntgybcog"><path class="vr56yfayh"/><rect class="um782re5x"/><path class="u5q5-zzyw"/></g>`,
		"fallback": "iconoven:ketchup-bottle",
	});
}

export default Component;
