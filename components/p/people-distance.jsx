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
		"content": `<style>.js9q-lb6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM2.5 14.5v-.75a3.5 3.5 0 0 1 7 0v.75M15.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-1.25 9.5v-.75a3.5 3.5 0 0 1 7 0v.75M5 17.5l-2 2l2 2m-2-2h18m-2-2l2 2l-2 2");
}
</style><path class="js9q-lb6h"/>`,
		"fallback": "uix-sharp:people-distance",
	});
}

export default Component;
