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
		"content": `<style>.y3-ho6bul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m6 21l4-12V7c0-1.28.36-2.36 1-3a1.414 1.414 0 0 1 2 0c.64.64 1 1.72 1 3v2l4 12M4 13a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4M9 12l3 6l3-6m-8 6h10");
}
</style><path class="y3-ho6bul"/>`,
		"fallback": "coolicons:transmission-tower-round",
	});
}

export default Component;
