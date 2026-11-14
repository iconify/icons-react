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
		"content": `<style>.eb3lnjrny {
  d: path("M12 8q.75 7.5-1.5 13.5M12 8q-5-4-9 .5m9-.5Q9 3 5.5 3M12 8q5-4 9 .5M12 8q3-5 6.5-5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z750_2xde {
  fill: currentColor;
  d: path("M7.5 11.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m6.75 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="eb3lnjrny"/><path class="z750_2xde"/></g>`,
		"fallback": "uix:palm-tree-coconut",
	});
}

export default Component;
