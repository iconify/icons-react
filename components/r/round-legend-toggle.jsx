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
		"content": `<style>.w2ylrmb-s {
  fill: currentColor;
  d: path("M19 15H5c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1s-.45 1-1 1m0 2H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1m-4-6l4.58-3.25c.26-.19.42-.49.42-.81c0-.81-.92-1.29-1.58-.82L15 8.55L10 5L4.48 8.36c-.3.19-.48.51-.48.86c0 .78.85 1.26 1.52.85l4.4-2.68z");
}
</style><path class="w2ylrmb-s"/>`,
		"fallback": "ic:round-legend-toggle",
	});
}

export default Component;
