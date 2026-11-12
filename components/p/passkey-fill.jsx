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
		"content": `<style>.p9clyvb4z {
  fill: currentColor;
  d: path("M3.393 5.053a5.001 5.001 0 1 1 9.213 3.896a5.001 5.001 0 0 1-9.213-3.896M16 13a1 1 0 0 1 0-2a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1v6.171a3 3 0 1 1-2 0V13Zm-3 9H3a1 1 0 0 1-1-1a8 8 0 0 1 .45-2.668C3.295 15.937 5.357 14.001 8 14c2.643.001 4.705 1.937 5.55 4.332c.301.857.453 1.76.45 2.668a1 1 0 0 1-1 1m5.293-3.707a.999.999 0 1 0 1.414 1.414a.999.999 0 1 0-1.414-1.414");
}
</style><path class="p9clyvb4z"/>`,
		"fallback": "coolicons:passkey-fill",
	});
}

export default Component;
