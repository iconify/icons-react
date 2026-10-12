import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":181};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rzo2uzb_r {
  fill: var(--svg-color--7624f4, #7624f4);
  d: path("M198.973 0c29.97 0 54.265 24.296 54.265 54.265s-24.294 54.266-54.265 54.266l53.826 53.826c6.838 6.837 1.995 18.528-7.673 18.528H90.442C40.492 180.885 0 140.392 0 90.442S40.492 0 90.442 0zM90.443 36.177c-29.97 0-54.266 24.295-54.266 54.265s24.295 54.265 54.265 54.265s54.265-24.295 54.265-54.265s-24.295-54.265-54.265-54.265");
}
</style><path class="rzo2uzb_r"/>`,
		"fallback": "logos:openrouter-icon",
	});
}

export default Component;
