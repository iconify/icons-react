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
		"content": `<style>.anflj9p5p {
  d: path("M11 16.25h2l-.5 1.5h-1Zm.5 1.5h1l.75 2.25L12 21l-1.25-1Z");
}

.kxer6zb1l {
  d: path("M4 21v-1.5c0-3 2.75-4.75 5.75-5L12 16.25l2.25-1.75c3 .25 5.75 2 5.75 5V21ZM8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kxer6zb1l"/><path class="anflj9p5p"/></g>`,
		"fallback": "uix-sharp:user-manager",
	});
}

export default Component;
