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
		"content": `<style>.f4s0k_vdg {
  fill: currentColor;
  d: path("M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16l-7-8v8H5l7-8V5h6c.55 0 1 .45 1 1z");
}
</style><path class="f4s0k_vdg"/>`,
		"fallback": "ic:round-filter-b-and-w",
	});
}

export default Component;
