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
		"content": `<style>.dwlfc3bdk {
  fill: currentColor;
  d: path("M6 14V8a6 6 0 1 1 12 0v12a1 1 0 0 1-2 0v-5H8v5a1 1 0 0 1-2 0Zm2-1h8V8a4 4 0 0 0-8 0Z");
}
</style><path class="dwlfc3bdk"/>`,
		"fallback": "coolicons:letter-a-bulk-sharp",
	});
}

export default Component;
