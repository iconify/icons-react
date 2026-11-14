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
		"content": `<style>.skp3ti4-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 13.5V9a6 6 0 0 1 12 0v4.5m-12.75 0h13.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 18.75 17H5.25a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75M6.5 17v4m11-4v4");
}
</style><path class="skp3ti4-y"/>`,
		"fallback": "uix:kids-chair",
	});
}

export default Component;
