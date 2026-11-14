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

.r470zbg-b {
  d: path("M12 21.5S4.5 15 4.5 9.5a7.5 7.5 0 0 1 15 0c0 5.5-7.5 12-7.5 12");
}

.zcphz8c-i {
  d: path("M9.25 9a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75l1.5 1.5");
}
</style><g class="hntgybcog"><path class="r470zbg-b"/><path class="zcphz8c-i"/></g>`,
		"fallback": "uix:map-pin-search",
	});
}

export default Component;
