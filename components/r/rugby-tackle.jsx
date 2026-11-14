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
		"content": `<style>.ni-nm6jyg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 6.75a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm11 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM2.5 21.5c0-5 2-8 5.5-8c2 0 3.5 1 4 2.5c.5-1.5 2-2.5 4-2.5c3.5 0 5.5 3 5.5 8");
}
</style><path class="ni-nm6jyg"/>`,
		"fallback": "uix-sharp:rugby-tackle",
	});
}

export default Component;
