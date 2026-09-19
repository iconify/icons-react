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
		"content": `<style>.don8ziruo {
  fill: currentColor;
  d: path("M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5zm-6-2h4v2h-4zm0 12V8l5.5 3z");
}
</style><path class="don8ziruo"/>`,
		"fallback": "ic:shop-two",
	});
}

export default Component;
