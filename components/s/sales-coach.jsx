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
		"content": `<style>.k1kk79byn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20c0-2.75 2.9-4.75 6.5-4.75s6.5 2 6.5 4.75c0 .6-.4 1-1 1h-11c-.6 0-1-.4-1-1ZM5.25 8.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM17 2.5h3A1.5 1.5 0 0 1 21.5 4v4A1.5 1.5 0 0 1 20 9.5h-2.5l-2 2V4A1.5 1.5 0 0 1 17 2.5Z");
}
</style><path class="k1kk79byn"/>`,
		"fallback": "uix-sharp:sales-coach",
	});
}

export default Component;
