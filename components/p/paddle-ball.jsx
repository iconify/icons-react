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
		"content": `<style>.c533l5btw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm6.75 2.75L17 18M13.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm1.25 2.75L7 18m3 1.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="c533l5btw"/>`,
		"fallback": "uix-sharp:paddle-ball",
	});
}

export default Component;
