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
		"content": `<style>.wp4vjnwrs {
  fill: currentColor;
  d: path("M111.59 181.47A8 8 0 0 1 104 192H24a8 8 0 0 1-7.59-10.53l40-120a8 8 0 0 1 15.18 0ZM208 76a52 52 0 1 0-52 52a52.06 52.06 0 0 0 52-52m16 68h-88a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8");
}
</style><path class="wp4vjnwrs"/>`,
		"fallback": "ph:shapes-fill",
	});
}

export default Component;
