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
		"content": `<style>.elt8uo96i {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m46.68-131.37a6 6 0 0 0-6.28.57L122 122V92a6 6 0 0 0-9.6-4.8l-48 36a6 6 0 0 0 0 9.6l48 36a6 6 0 0 0 9.6-4.8v-30l46.4 34.8a6 6 0 0 0 9.6-4.8V92a6 6 0 0 0-3.32-5.37M110 152l-32-24l32-24Zm56 0l-32-24l32-24Z");
}
</style><path class="elt8uo96i"/>`,
		"fallback": "ph:rewind-circle-light",
	});
}

export default Component;
