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
		"content": `<style>.e4v9pbbkt {
  d: path("M4.5 5.5c0-3.75 15-3.75 15 0m-9.5 4h.01M12 14h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y13d6ujuu {
  d: path("M10.435 17.37L5.766 8.033A1.75 1.75 0 0 1 7.332 5.5h9.336a1.75 1.75 0 0 1 1.566 2.533l-4.669 9.337a1.75 1.75 0 0 1-3.13 0");
}
</style><g class="hntgybcog"><path class="y13d6ujuu"/><path class="e4v9pbbkt"/></g>`,
		"fallback": "uix:pizzeria",
	});
}

export default Component;
