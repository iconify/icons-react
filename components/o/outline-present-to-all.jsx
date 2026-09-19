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
		"content": `<style>.vq_t3-bzj {
  fill: currentColor;
  d: path("M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16.02H3V4.98h18zM10 12H8l4-4l4 4h-2v4h-4z");
}
</style><path class="vq_t3-bzj"/>`,
		"fallback": "ic:outline-present-to-all",
	});
}

export default Component;
