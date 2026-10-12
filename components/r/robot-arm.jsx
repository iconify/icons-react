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
		"content": `<style>.azd-4hxli {
  d: path("M19.75 3.25h-2a1 1 0 0 0-1 1V7.5a1 1 0 0 0 1 1h2");
}

.d2lzq481w {
  cx: 6.75px;
  cy: 8.5px;
  r: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v6q4vyx6b {
  d: path("M4.75 21.25h8.5a1 1 0 0 0 1-1v-.5a2 2 0 0 0-2-2h-6.5a2 2 0 0 0-2 2v.5a1 1 0 0 0 1 1M9 17.75l-1.75-6.5M9.5 7.5l5.75-2");
}
</style><g class="hntgybcog"><path class="v6q4vyx6b"/><circle class="d2lzq481w"/><path class="azd-4hxli"/></g>`,
		"fallback": "iconoven:robot-arm",
	});
}

export default Component;
