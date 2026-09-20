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
		"content": `<style>.rwk7vcbrp {
  fill: currentColor;
  d: path("M240 180h-4V61.13l6.51-1.39a12 12 0 1 0-5-23.47l-224 48A12 12 0 0 0 16 108a12.2 12.2 0 0 0 2.53-.26l1.48-.32V180H16a12 12 0 0 0 0 24h224a12 12 0 0 0 0-24M44 102.27l168-36V180h-20v-60a12 12 0 0 0-12-12H76a12 12 0 0 0-12 12v60H44ZM168 144H88v-12h80Zm-80 24h80v12H88Z");
}
</style><path class="rwk7vcbrp"/>`,
		"fallback": "ph:warehouse-bold",
	});
}

export default Component;
