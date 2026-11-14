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
		"content": `<style>.f3sefib6c {
  d: path("M8 2.5c-2.75 0-4 2-4 4.75c0 2.5 1.5 4 2 5.75l.5 2.5h2l1.25-3.25c.5-1 4-1 4.5 0l1.25 3.25c.25 1 1.5 1 1.75 0L18 13c.5-1.75 2-3.25 2-5.75c0-2.75-1.25-4.75-4-4.75c-1.5 0-2.5 1-4 1s-2.5-1-4-1Z");
}

.g8htfs6oq {
  d: path("M4.5 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f3sefib6c"/><path class="g8htfs6oq"/></g>`,
		"fallback": "uix-sharp:tooth-abscess",
	});
}

export default Component;
