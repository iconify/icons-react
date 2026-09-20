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
		"content": `<style>.wnsqoybrw {
  fill: currentColor;
  d: path("m229.66 109.66l-48 48A8 8 0 0 1 168 152v-40h-3a88 88 0 0 0-85.23 66a8 8 0 0 1-15.5-4A103.94 103.94 0 0 1 165 96h3V56a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32M192 208H40V88a8 8 0 0 0-16 0v128a8 8 0 0 0 8 8h160a8 8 0 0 0 0-16");
}
</style><path class="wnsqoybrw"/>`,
		"fallback": "ph:share-fill",
	});
}

export default Component;
