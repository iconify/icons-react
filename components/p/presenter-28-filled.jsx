import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fm0a3cc_b {
  fill: currentColor;
  d: path("M24.25 14a.75.75 0 0 1 .51 1.3L19 20.648v2.602A2.75 2.75 0 0 1 16.25 26h-4.5A2.75 2.75 0 0 1 9 23.25v-2.602L3.24 15.3a.751.751 0 0 1 .51-1.3zm-7.997-3.5A2.75 2.75 0 0 1 18.99 13H9.016a2.75 2.75 0 0 1 2.737-2.5zM14 2a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7");
}
</style><path class="fm0a3cc_b"/>`,
		"fallback": "fluent:presenter-28-filled",
	});
}

export default Component;
