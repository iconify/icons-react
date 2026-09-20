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

.xyj-l9cjp {
  d: path("M3 18h18");
}

.y-a5g9b6x {
  d: path("M12 3a6.5 6.5 0 1 0 6.5 9.5A5.5 5.5 0 0 1 12 3");
}
</style><g class="hntgybcog"><path class="xyj-l9cjp"/><path class="y-a5g9b6x"/></g>`,
		"fallback": "iconmind:market-closed-outline-thin",
	});
}

export default Component;
