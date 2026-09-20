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
		"content": `<style>.t-sg7-wgp {
  fill: currentColor;
  d: path("M204 224a12 12 0 0 1-12 12H64a12 12 0 0 1 0-24h128a12 12 0 0 1 12 12m-76-28a68.07 68.07 0 0 0 68-68V56a12 12 0 0 0-24 0v72a44 44 0 0 1-88 0V56a12 12 0 0 0-24 0v72a68.07 68.07 0 0 0 68 68");
}
</style><path class="t-sg7-wgp"/>`,
		"fallback": "ph:text-underline-bold",
	});
}

export default Component;
