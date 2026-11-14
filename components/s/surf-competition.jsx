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
		"content": `<style>.ph3sswbtq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.476 20.663q-1.32.837-3.476.837q-5 0-5.5-4.5C4 12 4.5 6.5 10 2.5c3.774 2.745 5.194 6.197 5.552 9.708M10 7.5V18m5.5-3h6v1.25a3 3 0 0 1-6 0Zm3 4.25v2.25m-2.25 0h4.5");
}
</style><path class="ph3sswbtq"/>`,
		"fallback": "uix-sharp:surf-competition",
	});
}

export default Component;
