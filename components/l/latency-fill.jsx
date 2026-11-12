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
		"content": `<style>.z2x8fxz4d {
  fill: currentColor;
  d: path("M15 2a1 1 0 0 1 0 2h-2v2.061a8 8 0 0 1 6.984 8.44a8 8 0 0 1-15.968 0A8 8 0 0 1 11 6.061V4H9a1 1 0 0 1 0-2ZM8 13a1 1 0 0 0 0 2h2a1 1 0 0 0 .949-.684l.051-.154l1.051 3.154a1 1 0 0 0 1.898 0L14.721 15H16a1 1 0 0 0 0-2h-2a1 1 0 0 0-.949.684l-.051.154l-1.051-3.154a1 1 0 0 0-1.898 0L9.279 13Z");
}
</style><path class="z2x8fxz4d"/>`,
		"fallback": "coolicons:latency-fill",
	});
}

export default Component;
