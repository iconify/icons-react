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
		"content": `<style>.m82n3ab1m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 21c-.6 0-1-.4-1-1c0-2.75 2.9-4.75 6.5-4.75c1.25 0 2.35.25 3.25.75v5ZM5.25 8.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm9.5 9.75c.75-1.6 1.85-2.5 3.25-2.5s2.5.9 3.25 2.5c-.75 1.6-1.85 2.5-3.25 2.5s-2.5-.9-3.25-2.5ZM18 18h.01");
}
</style><path class="m82n3ab1m"/>`,
		"fallback": "uix-sharp:role-viewer",
	});
}

export default Component;
