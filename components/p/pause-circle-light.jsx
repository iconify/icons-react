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
		"content": `<style>.rbpfcbbfa {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M110 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0m48 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0");
}
</style><path class="rbpfcbbfa"/>`,
		"fallback": "ph:pause-circle-light",
	});
}

export default Component;
