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
		"content": `<style>.qt0o27b5o {
  d: path("m16.25 12.25l1 1l1.75-2");
}

.tyzf6fbgy {
  d: path("M2.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM14 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm-8.25 0h2.5m3.5 0H14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tyzf6fbgy"/><path class="qt0o27b5o"/></g>`,
		"fallback": "uix-sharp:sequence-finished",
	});
}

export default Component;
