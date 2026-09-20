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
		"content": `<style>.vzm0zk-ey {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 144a8 8 0 0 1-12.65 6.51L104 137.83V168a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0v30.17l51.35-36.68A8 8 0 0 1 168 88Z");
}
</style><path class="vzm0zk-ey"/>`,
		"fallback": "ph:skip-back-circle-fill",
	});
}

export default Component;
