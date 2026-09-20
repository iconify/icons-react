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
		"content": `<style>.p337ewbms {
  fill: currentColor;
  d: path("M58.89 178.86a12 12 0 0 0 16-5.75L90.44 140h75.12l15.58 33.11a12 12 0 0 0 21.72-10.22l-64-136a12 12 0 0 0-21.72 0l-64 136a12 12 0 0 0 5.75 15.97M128 60.18L154.27 116h-52.54ZM228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12");
}
</style><path class="p337ewbms"/>`,
		"fallback": "ph:text-a-underline-bold",
	});
}

export default Component;
