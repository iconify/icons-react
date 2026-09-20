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
		"content": `<style>.noove_b4g {
  fill: currentColor;
  d: path("M56 208a8 8 0 0 1-8.24 8a8.28 8.28 0 0 1-7.76-8.24a8 8 0 0 0-7.76-7.76a8.28 8.28 0 0 1-8.24-7.76a8 8 0 0 1 8-8.24a24 24 0 0 1 24 24m-24-56a8 8 0 0 0-8 8.65a8.17 8.17 0 0 0 8.24 7.35A40 40 0 0 1 72 207.76a8.17 8.17 0 0 0 7.36 8.24a8 8 0 0 0 8.64-8a56.06 56.06 0 0 0-56-56m0-32a8 8 0 0 0-8 8.6a8.22 8.22 0 0 0 8.3 7.4a72.08 72.08 0 0 1 71.7 71.68a8.22 8.22 0 0 0 7.4 8.3a8 8 0 0 0 8.6-8A88.1 88.1 0 0 0 32 120m184-80H40a16 16 0 0 0-16 16v44.08a4 4 0 0 0 4.15 4a104.11 104.11 0 0 1 107.78 107.77a4 4 0 0 0 4 4.15H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16");
}
</style><path class="noove_b4g"/>`,
		"fallback": "ph:screencast-fill",
	});
}

export default Component;
