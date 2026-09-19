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
		"content": `<style>.miz5pzb0u {
  fill: currentColor;
  d: path("M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z");
}
</style><path class="miz5pzb0u"/>`,
		"fallback": "ic:twotone-plus",
	});
}

export default Component;
