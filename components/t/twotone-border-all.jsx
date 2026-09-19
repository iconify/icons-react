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
		"content": `<style>.o82tddbwb {
  fill: currentColor;
  d: path("M21 3H3v18h18zM11 19H5v-6h6zm0-8H5V5h6zm8 8h-6v-6h6zm0-8h-6V5h6z");
}
</style><path class="o82tddbwb"/>`,
		"fallback": "ic:twotone-border-all",
	});
}

export default Component;
