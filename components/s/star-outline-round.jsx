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
		"content": `<style>.hioeeo6ii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3.25l2.25 6.25l6.5.25l-5.25 4l2 6.25l-5.5-3.75L6.5 20l2-6.25l-5.25-4l6.5-.25Z");
}
</style><path class="hioeeo6ii"/>`,
		"fallback": "uix-sharp:star-outline-round",
	});
}

export default Component;
