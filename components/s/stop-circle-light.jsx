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
		"content": `<style>.zv4y3d_fp {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m32-128H96a6 6 0 0 0-6 6v64a6 6 0 0 0 6 6h64a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6m-6 64h-52v-52h52Z");
}
</style><path class="zv4y3d_fp"/>`,
		"fallback": "ph:stop-circle-light",
	});
}

export default Component;
