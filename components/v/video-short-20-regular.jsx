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
		"content": `<style>.d4stoebcw {
  fill: currentColor;
  d: path("M13.154 2.004A3 3 0 0 1 16 5v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM7 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-1.796-1.99L13 3zm1 5.502a1 1 0 0 1 1.514-.858l2.504 1.498a1 1 0 0 1 0 1.716l-2.504 1.498A1 1 0 0 1 8 11.498z");
}
</style><path class="d4stoebcw"/>`,
		"fallback": "fluent:video-short-20-regular",
	});
}

export default Component;
