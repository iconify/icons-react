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
		"content": `<style>.ih0h9nbqx {
  fill: currentColor;
  d: path("M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m-1 16.02H4c-.55 0-1-.45-1-1V5.98c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.04c0 .55-.45 1-1 1M10 12H8l3.65-3.65c.2-.2.51-.2.71 0L16 12h-2v4h-4z");
}
</style><path class="ih0h9nbqx"/>`,
		"fallback": "ic:round-present-to-all",
	});
}

export default Component;
