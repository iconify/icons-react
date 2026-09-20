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
		"content": `<style>.hhkjexbou {
  d: path("M5 10c0 -3 3 -4 7 -4s7 1 7 4Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ljwrd-sbd {
  d: path("M5 16a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3");
}
</style><g class="hntgybcog"><path class="ljwrd-sbd"/><path class="hhkjexbou"/></g>`,
		"fallback": "iconmind:sushi-outline-thin",
	});
}

export default Component;
