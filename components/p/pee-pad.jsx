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
		"content": `<style>.b_2g5-bzw {
  d: path("M8.05 5h10.088a2.625 2.625 0 0 1 2.547 3.262l-2.188 8.75A2.625 2.625 0 0 1 15.95 19H5.862a2.625 2.625 0 0 1-2.547-3.262l2.188-8.75A2.625 2.625 0 0 1 8.05 5");
}

.efgjh3zfy {
  d: path("M12 7.75S9 11.25 9 13a3 3 0 0 0 6 0c0-1.75-3-5.25-3-5.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b_2g5-bzw"/><path class="efgjh3zfy"/></g>`,
		"fallback": "uix:pee-pad",
	});
}

export default Component;
