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
		"content": `<style>.dvfnybups {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 8.5a5 6 0 1 0 10 0a5 6 0 1 0-10 0Zm5 6v7m-5-13h10m-5-6v12m5.5 4a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3-11v5");
}
</style><path class="dvfnybups"/>`,
		"fallback": "uix-sharp:smash-shot",
	});
}

export default Component;
