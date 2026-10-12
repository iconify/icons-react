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
		"content": `<style>.gcnqgobmh {
  cx: 14.75px;
  cy: 9.75px;
  r: 2.5px;
}

.mn95_42kp {
  d: path("M14.5 3.5c3.75 0 6.75 2.75 6.75 6.5c0 5.5-6.25 11.25-12.75 11.25c-3.5 0-5.75-1.5-5.75-4c0-2.75 2.75-3.5 4-5.5C8.5 9 10 3.5 14.5 3.5Z");
}

.u3hrj9-3k {
  d: path("m5.75 17l2.438.813L10 16");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mn95_42kp"/><circle class="gcnqgobmh"/><path class="u3hrj9-3k"/></g>`,
		"fallback": "iconoven:steak-sharp",
	});
}

export default Component;
