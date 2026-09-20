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
		"content": `<style>.f-qptvb2u {
  fill: currentColor;
  d: path("M256 172v8a12 12 0 0 1-24 0v-8a104 104 0 0 0-208 0v8a12 12 0 0 1-24 0v-8a128 128 0 0 1 256 0m-128-32a36 36 0 0 0-36 36v4a12 12 0 0 0 24 0v-4a12 12 0 0 1 24 0v4a12 12 0 0 0 24 0v-4a36 36 0 0 0-36-36m0-48a84.09 84.09 0 0 0-84 84v4a12 12 0 0 0 24 0v-4a60 60 0 0 1 120 0v4a12 12 0 0 0 24 0v-4a84.09 84.09 0 0 0-84-84");
}
</style><path class="f-qptvb2u"/>`,
		"fallback": "ph:rainbow-bold",
	});
}

export default Component;
