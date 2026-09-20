import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.saikndfvo {
  fill: currentColor;
  d: path("M13.154 2.004A3 3 0 0 1 16 5v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zm-3.64 5.64A1 1 0 0 0 8 8.502v2.996a1 1 0 0 0 1.514.858l2.504-1.498a1 1 0 0 0 0-1.716z");
}
</style><path class="saikndfvo"/>`,
		"fallback": "fluent:video-short-20-filled",
	});
}

export default Component;
