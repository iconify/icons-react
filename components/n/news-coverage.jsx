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
		"content": `<style>.rbolg0wie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 20.5h14a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v13a2 2 0 0 1-4 0v-9h4m3-2h8m-8 4h8m-8 4h5");
}
</style><path class="rbolg0wie"/>`,
		"fallback": "uix-sharp:news-coverage",
	});
}

export default Component;
