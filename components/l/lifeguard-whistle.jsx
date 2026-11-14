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
		"content": `<style>.rnx5s3t4m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h11.5A5.5 5.5 0 1 1 9 14.5V13H3Zm11.5 5.5h.01M4.5 9C3.5 5.5 6 3 9 3.5");
}
</style><path class="rnx5s3t4m"/>`,
		"fallback": "uix-sharp:lifeguard-whistle",
	});
}

export default Component;
