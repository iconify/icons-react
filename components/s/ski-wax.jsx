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

.nyh2wr5qz {
  d: path("M5 19.5v-9.414a1.5 1.5 0 0 1 .398-1.017l5.157-5.586A1.5 1.5 0 0 1 11.657 3H17.5A1.5 1.5 0 0 1 19 4.5v12.138a1.5 1.5 0 0 1-.744 1.296l-4.906 2.862a1.5 1.5 0 0 1-.756.204H6.5A1.5 1.5 0 0 1 5 19.5");
}

.tyqpq712i {
  d: path("M5 9.5h8V21m0-11.5L19 3");
}
</style><g class="hntgybcog"><path class="nyh2wr5qz"/><path class="tyqpq712i"/></g>`,
		"fallback": "uix:ski-wax",
	});
}

export default Component;
