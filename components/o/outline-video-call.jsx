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
		"content": `<style>.w2ee_rbha {
  fill: currentColor;
  d: path("M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11zM15 16H5V8h10zm-6-1h2v-2h2v-2h-2V9H9v2H7v2h2z");
}
</style><path class="w2ee_rbha"/>`,
		"fallback": "ic:outline-video-call",
	});
}

export default Component;
