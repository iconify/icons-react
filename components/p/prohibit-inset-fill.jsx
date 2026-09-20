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
		"content": `<style>.qqkrm3b5s {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 141.66a8 8 0 0 1-11.32 0l-64-64a8 8 0 0 1 11.32-11.32l64 64a8 8 0 0 1 0 11.32");
}
</style><path class="qqkrm3b5s"/>`,
		"fallback": "ph:prohibit-inset-fill",
	});
}

export default Component;
