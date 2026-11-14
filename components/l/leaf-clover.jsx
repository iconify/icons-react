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
		"content": `<style>.eeih5-g-h {
  d: path("M12 13.5c0 3.5 1.5 6 4 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wm4vh379r {
  d: path("M9 8.25a3.75 3.75 0 1 1 6 0a3.75 3.75 0 1 1-3 5.25a3.75 3.75 0 1 1-3-5.25");
}
</style><g class="hntgybcog"><path class="wm4vh379r"/><path class="eeih5-g-h"/></g>`,
		"fallback": "uix:leaf-clover",
	});
}

export default Component;
