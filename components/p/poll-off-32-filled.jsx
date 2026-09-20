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
		"content": `<style>.veg9qbp8p {
  fill: currentColor;
  d: path("m27.165 28.58l1.128 1.127a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414L12 13.415V25.5a3.5 3.5 0 1 0 7 0v-5.086l3 3V25.5a3.5 3.5 0 0 0 5.165 3.08M22 18.464l7 7V12.5a3.5 3.5 0 1 0-7 0zm-10-10l7 7V6.5a3.5 3.5 0 1 0-7 0zM2 18.5a3.5 3.5 0 0 1 7 0v7a3.5 3.5 0 1 1-7 0z");
}
</style><path class="veg9qbp8p"/>`,
		"fallback": "fluent:poll-off-32-filled",
	});
}

export default Component;
