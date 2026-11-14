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

.mb1kdyqfx {
  d: path("M12 21.5s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12");
}

.xxbb1tvdz {
  d: path("M10 11.75a2 1.5 0 1 0 4 0a2 1.5 0 1 0-4 0M9.5 8h.01M12 6.5h.01M14.5 8h.01");
}
</style><g class="hntgybcog"><path class="mb1kdyqfx"/><path class="xxbb1tvdz"/></g>`,
		"fallback": "uix:pet-gps-map",
	});
}

export default Component;
