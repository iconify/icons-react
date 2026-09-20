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
		"content": `<style>.ovhhjqbgw {
  fill: currentColor;
  d: path("M208 36H48a20 20 0 0 0-20 20v56c0 54.29 26.32 87.22 48.4 105.29c23.71 19.39 47.44 26 48.44 26.29a12.1 12.1 0 0 0 6.32 0c1-.28 24.73-6.9 48.44-26.29c22.08-18.07 48.4-51 48.4-105.29V56a20 20 0 0 0-20-20M52 60h152v52a119.5 119.5 0 0 1-7 41.64l-62.11-43.47a12 12 0 0 0-13.76 0L59 153.64A119.5 119.5 0 0 1 52 112Zm113.09 138.15A126.3 126.3 0 0 1 128 219.38a126.1 126.1 0 0 1-37.09-21.23A109 109 0 0 1 70 175.23l58-40.58l58 40.58a109 109 0 0 1-20.91 22.92");
}
</style><path class="ovhhjqbgw"/>`,
		"fallback": "ph:shield-chevron-bold",
	});
}

export default Component;
