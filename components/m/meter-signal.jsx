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
		"content": `<style>.w3pt1opmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11.5a7.5 7.5 0 0 1 15 0Zm7.5 0L13.5 7M15 18.5v3m3-5v5m3-7v7");
}
</style><path class="w3pt1opmw"/>`,
		"fallback": "uix-sharp:meter-signal",
	});
}

export default Component;
