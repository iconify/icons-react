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
		"content": `<style>.opqz2iw8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h13v19h-13Zm0 5h13M5.5 12h13m-13 4.5h13M9 5h.01M9 9.75h.01M9 14.25h.01M9 19h.01");
}
</style><path class="opqz2iw8k"/>`,
		"fallback": "uix-sharp:server-blade",
	});
}

export default Component;
