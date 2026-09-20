import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wntn6wfdb {
  fill: currentColor;
  d: path("M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12m12 76h116a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24m68 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24m143.49-52.55a12 12 0 0 1-14.94 8L212 128.13V192a36 36 0 1 1-24-33.94V112a12 12 0 0 1 15.45-11.49l40 12a12 12 0 0 1 8.04 14.94M188 192a12 12 0 1 0-12 12a12 12 0 0 0 12-12");
}
</style><path class="wntn6wfdb"/>`,
		"fallback": "ph:playlist-bold",
	});
}

export default Component;
