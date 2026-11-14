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

.lk5e2wn2e {
  d: path("M5.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-2 4a4.5 1.5 0 0 0 9 0m0 8.5h7m0-2v4");
}

.mdqjx-buk {
  d: path("M3.5 9a4.5 1.5 0 0 1 9 0v11a4.5 1.5 0 0 1-9 0Z");
}
</style><g class="hntgybcog"><path class="mdqjx-buk"/><path class="lk5e2wn2e"/></g>`,
		"fallback": "uix:water-softener",
	});
}

export default Component;
