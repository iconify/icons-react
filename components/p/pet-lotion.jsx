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
		"content": `<style>.x2g1c-bvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9h9v12.5h-9ZM8 9V3.5h5m5.5 6.5s3 3.5 3 5.5a3 3 0 0 1-6 0c0-2 3-5.5 3-5.5Z");
}
</style><path class="x2g1c-bvw"/>`,
		"fallback": "uix-sharp:pet-lotion",
	});
}

export default Component;
