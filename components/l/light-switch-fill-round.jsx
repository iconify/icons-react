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
		"content": `<style>.x772s8l1d {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Zm8 1a1 1 0 0 0-1 1v2h6V9a1 1 0 0 0-1-1Zm-1 7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2H9Z");
}
</style><path class="x772s8l1d"/>`,
		"fallback": "coolicons:light-switch-fill-round",
	});
}

export default Component;
