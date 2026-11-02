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
		"content": `<style>.ilreftvpv {
  fill: currentColor;
  d: path("M7.414 6L18 16.586V15a1 1 0 0 1 2 0v4a.997.997 0 0 1-1 1h-4a1 1 0 0 1 0-2h1.586L6 7.414V9a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2Z");
}
</style><path class="ilreftvpv"/>`,
		"fallback": "coolicons:move-diagonal-2-bulk-sharp",
	});
}

export default Component;
