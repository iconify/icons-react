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
		"content": `<style>.h05qq-bcv {
  fill: currentColor;
  d: path("M6.5 9H8v6H6.5v-2.5h-2V15H3V9h1.5v2h2zm10 6h3c.55 0 1-.45 1-1v-1.5c0-.55-.45-1-1-1H17v-1h2v.5h1.5v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v1.5c0 .55.45 1 1 1H19v1h-2V13h-1.5v1c0 .55.45 1 1 1M14 15v-1.5h-2.5V9H10v6z");
}
</style><path class="h05qq-bcv"/>`,
		"fallback": "ic:outline-hls",
	});
}

export default Component;
