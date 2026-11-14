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
		"content": `<style>.apb9vsb2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h19v4h-19ZM3 18l2-8l2 8m3 0l2-8l2 8m3 0l2-8l2 8M2.5 18h19");
}
</style><path class="apb9vsb2p"/>`,
		"fallback": "uix-sharp:pipeline-above-ground",
	});
}

export default Component;
