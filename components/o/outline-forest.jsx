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
		"content": `<style>.xkqwyvbyb {
  fill: currentColor;
  d: path("m24 18l-3.86-6H22L15 2l-3 4.29L9 2L2 12h1.86L0 18h7v4h4v-4h2v4h4v-4zM15 5.49L18.16 10h-1.68l3.86 6h-3.62l-2.57-4H16l-2.78-3.97zM3.66 16l3.86-6H5.84L9 5.49L12.16 10h-1.68l3.86 6z");
}
</style><path class="xkqwyvbyb"/>`,
		"fallback": "ic:outline-forest",
	});
}

export default Component;
