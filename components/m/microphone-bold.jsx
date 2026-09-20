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
		"content": `<style>.xh7ycwbhz {
  fill: currentColor;
  d: path("M128 180a52.06 52.06 0 0 0 52-52V64a52 52 0 0 0-104 0v64a52.06 52.06 0 0 0 52 52M100 64a28 28 0 0 1 56 0v64a28 28 0 0 1-56 0Zm40 155.22V240a12 12 0 0 1-24 0v-20.78A92.14 92.14 0 0 1 36 128a12 12 0 0 1 24 0a68 68 0 0 0 136 0a12 12 0 0 1 24 0a92.14 92.14 0 0 1-80 91.22");
}
</style><path class="xh7ycwbhz"/>`,
		"fallback": "ph:microphone-bold",
	});
}

export default Component;
