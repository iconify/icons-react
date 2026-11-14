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
		"content": `<style>.q4pam2b2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h3.5l5-4.5v15l-5-4.5H3Zm11.181.75a3.5 3.5 0 0 1 0 4.5m2.298-6.428a6.5 6.5 0 0 1 0 8.356m2.298-10.284a9.5 9.5 0 0 1 0 12.212");
}
</style><path class="q4pam2b2m"/>`,
		"fallback": "uix-sharp:speaker-waves",
	});
}

export default Component;
