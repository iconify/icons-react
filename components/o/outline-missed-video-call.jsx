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
		"content": `<style>.rgesmft3r {
  fill: currentColor;
  d: path("M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11zm-2-1.83V16H5V8h10zm-7.89 2.44L11 15l3.77-3.79l-.78-.79L11 13.43l-3.11-3.1h2.55V9.22H6v4.44h1.11z");
}
</style><path class="rgesmft3r"/>`,
		"fallback": "ic:outline-missed-video-call",
	});
}

export default Component;
