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
		"content": `<style>.v-xsqfb_z {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm10 0a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3ZM3 16a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Zm14-3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2Zm3.01 0a1 1 0 0 1 0 2H20a1 1 0 0 1 0-2ZM15 20a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm6-2v2a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1");
}
</style><path class="v-xsqfb_z"/>`,
		"fallback": "coolicons:qr-code-fill-round",
	});
}

export default Component;
