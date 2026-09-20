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
		"content": `<style>.njy38gbcs {
  fill: currentColor;
  d: path("M180 150.69V56a52 52 0 0 0-104 0v94.69a64 64 0 1 0 104 0M128 228a40 40 0 0 1-30.91-65.39a12 12 0 0 0 2.91-7.83V56a28 28 0 0 1 56 0v98.77a12 12 0 0 0 2.77 7.68A40 40 0 0 1 128 228m24-40a24 24 0 1 1-36-20.78V92a12 12 0 0 1 24 0v75.22A24 24 0 0 1 152 188");
}
</style><path class="njy38gbcs"/>`,
		"fallback": "ph:thermometer-simple-bold",
	});
}

export default Component;
