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
		"content": `<style>.woje_d01k {
  fill: currentColor;
  d: path("M20 9H4v2h16zM4 15h16v-2H4z");
}
</style><path class="woje_d01k"/>`,
		"fallback": "ic:outline-drag-handle",
	});
}

export default Component;
