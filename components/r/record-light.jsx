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
		"content": `<style>.b961rgb-y {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m0-160a70 70 0 1 0 70 70a70.08 70.08 0 0 0-70-70m0 128a58 58 0 1 1 58-58a58.07 58.07 0 0 1-58 58");
}
</style><path class="b961rgb-y"/>`,
		"fallback": "ph:record-light",
	});
}

export default Component;
