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
		"content": `<style>.d7uiw119r {
  fill: currentColor;
  d: path("M8 2h8a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m-1 9a1 1 0 0 0 .2.6a6 6 0 0 0 9.6 0a1 1 0 0 0 .2-.6V9a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8 5H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="d7uiw119r"/>`,
		"fallback": "coolicons:inverter-fill-round",
	});
}

export default Component;
