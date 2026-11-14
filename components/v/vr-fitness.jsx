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
		"content": `<style>.z71-5kb5o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10A3.5 3.5 0 0 1 20.5 6v3.5A3.5 3.5 0 0 1 17 13h-2.25L12 10.25L9.25 13H7a3.5 3.5 0 0 1-3.5-3.5V6A3.5 3.5 0 0 1 7 2.5ZM2 7.75h1.5m17 0H22m-7.5 8.75h2.25v5H14.5Zm5.25 0H22v5h-2.25Zm-3 2.5h3");
}
</style><path class="z71-5kb5o"/>`,
		"fallback": "uix-sharp:vr-fitness",
	});
}

export default Component;
