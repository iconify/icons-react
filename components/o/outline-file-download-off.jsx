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
		"content": `<style>.hjzegz76q {
  fill: currentColor;
  d: path("M18 15.17V15h2v2.17zm-2.59-2.58L17 11l-1.41-1.41L14 11.17zM13 10.17V4h-2v4.17zm8.19 11.02l-1.78-1.78l-16.6-16.6l-1.42 1.41l6.19 6.19L7 11l5 5l.59-.59L15.17 18H6v-3H4v3c0 1.1.9 2 2 2h11.17l2.61 2.61z");
}
</style><path class="hjzegz76q"/>`,
		"fallback": "ic:outline-file-download-off",
	});
}

export default Component;
