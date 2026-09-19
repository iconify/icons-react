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
		"content": `<style>.wm7f2etqw {
  fill: currentColor;
  d: path("M22.92 8H17v7.99l-4.29 4.3c-.39.39-1.02.39-1.42 0L.73 9.71C.32 9.3.35 8.63.79 8.24C3.78 5.6 7.7 4 12 4c4.16 0 7.97 1.51 10.92 4M20 18c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0-8c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1");
}
</style><path class="wm7f2etqw"/>`,
		"fallback": "ic:round-signal-wifi-statusbar-connected-no-internet-4",
	});
}

export default Component;
