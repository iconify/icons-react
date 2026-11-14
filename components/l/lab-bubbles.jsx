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
		"content": `<style>.cjuzsohos {
  d: path("M8.25 16.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4.25-5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM11 6h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkvq8fyeh {
  d: path("M4 3h1.5v15.5A2.5 2.5 0 0 0 8 21h8a2.5 2.5 0 0 0 2.5-2.5V3");
}
</style><g class="ulnmmdpxh"><path class="vkvq8fyeh"/><path class="cjuzsohos"/></g>`,
		"fallback": "uix-sharp:lab-bubbles",
	});
}

export default Component;
