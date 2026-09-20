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
		"content": `<style>.tm89p4bqd {
  fill: currentColor;
  d: path("M234.7 29.3a31.83 31.83 0 0 0-45 0L15.52 203.56a12 12 0 0 0 5.78 20.19A165 165 0 0 0 58.42 228c33.71 0 67.41-10.42 99.1-30.87c32.32-20.86 51.16-44.7 51.94-45.7a12 12 0 0 0-1-15.89L191 118l43.7-43.71a31.86 31.86 0 0 0 0-44.99m-90.83 148.06C113 197.12 81.28 206 49.28 203.74L146 107l19.5 19.51l18 18a216.7 216.7 0 0 1-39.63 32.85m73.86-120L174 101l-11-11l43.7-43.72a7.8 7.8 0 0 1 11 11Z");
}
</style><path class="tm89p4bqd"/>`,
		"fallback": "ph:knife-bold",
	});
}

export default Component;
