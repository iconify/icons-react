import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bmes8jyfz {
  fill: currentColor;
  d: path("M236 49a25 25 0 0 0-42.63-17.66l-50.21 50.2L18.34 206.4a8 8 0 0 0 3.86 13.45A160.7 160.7 0 0 0 58.4 224c32.95 0 65.91-10.2 96.94-30.23c31.76-20.5 50.19-43.82 51-44.8a8 8 0 0 0-.64-10.59L181.31 114l47.38-47.39A24.84 24.84 0 0 0 236 49m-89.77 131.6c-34.43 22.1-69.94 30.92-105.76 26.3L146 101.34l43.09 43.1a220 220 0 0 1-42.86 36.16");
}
</style><path class="bmes8jyfz"/>`,
		"fallback": "ph:knife-fill",
	});
}

export default Component;
