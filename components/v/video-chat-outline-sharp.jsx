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
		"content": `<style>.th2ayxjkr {
  fill: currentColor;
  d: path("M7.5 13.5h7v-2.961l1.923 1.923V7.539L14.5 9.46V6.5h-7zM3 20.077V3h18v14H6.077zM5.65 16H20V4H4v13.644zM4 16V4z");
}
</style><path class="th2ayxjkr"/>`,
		"fallback": "material-symbols-light:video-chat-outline-sharp",
	});
}

export default Component;
