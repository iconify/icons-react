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
		"content": `<style>.dxzz9sbsd {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m32-136a8 8 0 0 0-8 8v25.57l-51.76-32.35A8 8 0 0 0 88 88v80a8 8 0 0 0 12.24 6.78L152 142.43V168a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8m-56 73.57v-51.14L144.91 128Z");
}
</style><path class="dxzz9sbsd"/>`,
		"fallback": "ph:skip-forward-circle",
	});
}

export default Component;
