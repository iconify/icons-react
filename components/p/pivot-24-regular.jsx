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
		"content": `<style>.zkdikhbip {
  fill: currentColor;
  d: path("M19.776 13.168a.75.75 0 0 1 1.004.052l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v2.19A3.25 3.25 0 0 1 17.75 21h-2.19l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 1 1 1.06 1.06l-.72.72h2.19a1.75 1.75 0 0 0 1.75-1.75v-2.19l-.72.72a.75.75 0 1 1-1.06-1.06l2-2zM17.75 3A3.25 3.25 0 0 1 21 6.25v5.92a1.75 1.75 0 0 0-1.5 0V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h5.92a1.75 1.75 0 0 0 0 1.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zM9 12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0-6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z");
}
</style><path class="zkdikhbip"/>`,
		"fallback": "fluent:pivot-24-regular",
	});
}

export default Component;
