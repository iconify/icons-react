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
		"content": `<style>.jnv5nusqj {
  d: path("M14.75 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm-11 6.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM9 10.5L15 7m-6 6.5l4.5 2.75m1-.75h7v5h-7Z");
}

.ugzm8vbzf {
  d: path("M14.75 16L18 18.25L21.25 16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jnv5nusqj"/><path class="ugzm8vbzf"/></g>`,
		"fallback": "uix-sharp:share-email",
	});
}

export default Component;
