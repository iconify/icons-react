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
		"content": `<style>.dmuq1fbzg {
  fill: currentColor;
  d: path("M96 124a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m128.49-52.49a12 12 0 0 1 0 17l-48 48a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0m-36-20a12 12 0 0 1 0 17l-20 20a12 12 0 0 1-17-17l20-20a12 12 0 0 1 17 0m44-27l-16 16a12 12 0 0 1-17-17l16-16a12 12 0 0 1 17 17m-113 15l72-72a12 12 0 0 1 17 17l-72 72a12 12 0 1 1-17-17m30.23 109.26a12 12 0 0 1 0 17A76 76 0 1 1 42.26 106.26L125 23.51a12 12 0 1 1 17 17l-82.77 82.72a52 52 0 0 0 73.54 73.54a12 12 0 0 1 16.97 0Z");
}
</style><path class="dmuq1fbzg"/>`,
		"fallback": "ph:meteor-bold",
	});
}

export default Component;
