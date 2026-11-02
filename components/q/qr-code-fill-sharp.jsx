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
		"content": `<style>.dlrwu88pf {
  fill: currentColor;
  d: path("M4 3h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m10 0h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1M4 13h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1m13 0a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2Zm3.01 0a1 1 0 0 1 0 2H20a1 1 0 0 1 0-2ZM15 20a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm6-2v2a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1");
}
</style><path class="dlrwu88pf"/>`,
		"fallback": "coolicons:qr-code-fill-sharp",
	});
}

export default Component;
