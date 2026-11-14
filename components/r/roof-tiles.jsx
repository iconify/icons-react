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
		"content": `<style>.jpymiqbcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20L12 3l9.5 17Zm5-9h9M5 15.5h14m-7-8V11m-2 0v4.5m4-4.5v4.5m-6 0V20m4-4.5V20m4-4.5V20");
}
</style><path class="jpymiqbcg"/>`,
		"fallback": "uix-sharp:roof-tiles",
	});
}

export default Component;
