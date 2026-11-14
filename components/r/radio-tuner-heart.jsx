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
		"content": `<style>.tc7e-4x6p {
  d: path("M11.8 17.5H2.5v-14h19v8.8");
}

.tt5scfpwo {
  d: path("M5.25 10.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm3.25 0V7.25m6.25 2.5h4m-2-3.25v5.25m1 9.25c-2.75-2-3.25-3.5-3.25-4.5c0-1.25 1-2 1.75-2s1.25.5 1.5 1.25c.25-.75.75-1.25 1.5-1.25s1.75.75 1.75 2c0 1-.5 2.5-3.25 4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tc7e-4x6p"/><path class="tt5scfpwo"/></g>`,
		"fallback": "uix-sharp:radio-tuner-heart",
	});
}

export default Component;
