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
		"content": `<style>.wuri7rbfp {
  fill: currentColor;
  d: path("M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1.171A3 3 0 0 1 22 11v4c0 1.27-.803 2.405-2 2.829V19a1 1 0 0 1-2 0v-1H6v1a1 1 0 0 1-2 0v-1.171A3 3 0 0 1 2 15v-4c0-1.27.803-2.405 2-2.829Zm5 5h2V6H7a.997.997 0 0 0-1 1v1.171A3 3 0 0 1 8 11a.997.997 0 0 0 1 1m4 0h2a.997.997 0 0 0 1-1a3 3 0 0 1 2-2.829V7a1 1 0 0 0-1-1h-4Z");
}
</style><path class="wuri7rbfp"/>`,
		"fallback": "coolicons:sofa-fill",
	});
}

export default Component;
