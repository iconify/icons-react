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
		"content": `<style>.zx7m20bzn {
  fill: currentColor;
  d: path("M3 7v2h5v2H4v2h4v2H3v2h5c1.1 0 2-.9 2-2v-1.5c0-.83-.67-1.5-1.5-1.5c.83 0 1.5-.67 1.5-1.5V9c0-1.1-.9-2-2-2zm18 4v4c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2h-7v6h5v-2h-2.5v-2z");
}
</style><path class="zx7m20bzn"/>`,
		"fallback": "ic:twotone-3g-mobiledata",
	});
}

export default Component;
