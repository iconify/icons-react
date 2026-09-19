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
		"content": `<style>.og9negm3r {
  fill: currentColor;
  d: path("M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M8 20H5c-.55 0-1-.45-1-1v-3h4zm0-6H4v-4h4zm0-6H4V5c0-.55.45-1 1-1h3zm6 12h-4v-4h4zm0-6h-4v-4h4zm0-6h-4V4h4zm5 12h-3v-4h4v3c0 .55-.45 1-1 1m1-6h-4v-4h4zm0-6h-4V4h3c.55 0 1 .45 1 1z");
}
</style><path class="og9negm3r"/>`,
		"fallback": "ic:round-grid-on",
	});
}

export default Component;
