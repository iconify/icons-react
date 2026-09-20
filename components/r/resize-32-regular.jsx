import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zj0z2cbbm {
  fill: currentColor;
  d: path("M13 3H7.5A4.5 4.5 0 0 0 3 7.5V9a1 1 0 0 0 2 0V7.5A2.5 2.5 0 0 1 7.5 5H13a1 1 0 1 0 0-2M5 24.5v-8A2.5 2.5 0 0 1 7.5 14h8a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 5 24.5M15.5 29a4.5 4.5 0 0 0 4.5-4.5v-8a4.5 4.5 0 0 0-4.5-4.5h-8A4.5 4.5 0 0 0 3 16.5v8A4.5 4.5 0 0 0 7.5 29zm6.5-1a1 1 0 0 1 1-1h1.5a2.5 2.5 0 0 0 2.5-2.5V19a1 1 0 1 1 2 0v5.5a4.5 4.5 0 0 1-4.5 4.5H23a1 1 0 0 1-1-1m7-15V7.5A4.5 4.5 0 0 0 24.5 3H19a1 1 0 1 0 0 2h5.5A2.5 2.5 0 0 1 27 7.5V13a1 1 0 1 0 2 0");
}
</style><path class="zj0z2cbbm"/>`,
		"fallback": "fluent:resize-32-regular",
	});
}

export default Component;
