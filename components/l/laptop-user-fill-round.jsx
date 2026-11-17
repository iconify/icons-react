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
		"content": `<style>.l60xtibdr {
  fill: currentColor;
  d: path("M4 8a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v7.171A3.001 3.001 0 0 1 19 21H5a3 3 0 0 1-1-5.829Zm5 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0m6 7a1 1 0 0 0 1-1c0-.257-.075-.506-.209-.725C15.124 12.188 13.099 12 12 12s-3.124.188-3.791 1.275A1.4 1.4 0 0 0 8 14a1 1 0 0 0 1 1ZM5 17a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z");
}
</style><path class="l60xtibdr"/>`,
		"fallback": "coolicons:laptop-user-fill-round",
	});
}

export default Component;
