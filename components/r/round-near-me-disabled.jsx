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
		"content": `<style>.mvb70smlx {
  fill: currentColor;
  d: path("m12 6.34l6.95-2.58c.8-.3 1.58.48 1.29 1.29L17.66 12zm9.9 12.73L4.93 2.1a.996.996 0 1 0-1.41 1.41l4.36 4.36l-4.2 1.56c-.41.16-.68.54-.68.97c0 .42.26.8.65.96l6.42 2.57l2.57 6.42c.16.39.54.65.96.65c.43 0 .82-.27.97-.67l1.56-4.2l4.36 4.36c.39.39 1.02.39 1.41 0c.39-.4.39-1.03 0-1.42");
}
</style><path class="mvb70smlx"/>`,
		"fallback": "ic:round-near-me-disabled",
	});
}

export default Component;
