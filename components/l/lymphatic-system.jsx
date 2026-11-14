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
		"content": `<style>.feh94fb1h {
  d: path("M8.5 8.5c0 2.5 7-2 7 .5m0 6c0 2.5-7-2-7 .5");
}

.fgq5wxbhy {
  d: path("M6 5.5a2.5 3 0 1 0 5 0a2.5 3 0 1 0-5 0Zm7 6.5a2.5 3 0 1 0 5 0a2.5 3 0 1 0-5 0Zm-7 6.5a2.5 3 0 1 0 5 0a2.5 3 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fgq5wxbhy"/><path class="feh94fb1h"/></g>`,
		"fallback": "uix-sharp:lymphatic-system",
	});
}

export default Component;
