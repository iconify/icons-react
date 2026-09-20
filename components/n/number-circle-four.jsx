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
		"content": `<style>.d-k21ub4e {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m32-72h-8V80a8 8 0 0 0-14.31-4.91l-56 72A8 8 0 0 0 88 160h48v16a8 8 0 0 0 16 0v-16h8a8 8 0 0 0 0-16m-24 0h-31.64L136 103.32Z");
}
</style><path class="d-k21ub4e"/>`,
		"fallback": "ph:number-circle-four",
	});
}

export default Component;
