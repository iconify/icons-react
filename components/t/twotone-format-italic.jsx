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
		"content": `<style>.qmfalhmpb {
  fill: currentColor;
  d: path("M6 15v3h8v-3h-2.21l3.42-8H18V4h-8v3h2.21l-3.42 8z");
}
</style><path class="qmfalhmpb"/>`,
		"fallback": "ic:twotone-format-italic",
	});
}

export default Component;
