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
		"content": `<style>.kxmiywbon {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m24-95.95l-36 48h36a6 6 0 0 1 0 12h-48a6 6 0 0 1-4.8-9.6l43.17-57.56A18 18 0 1 0 111 98a6 6 0 1 1-11.31-4A30 30 0 1 1 152 122.05");
}
</style><path class="kxmiywbon"/>`,
		"fallback": "ph:number-circle-two-light",
	});
}

export default Component;
