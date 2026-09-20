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
		"content": `<style>.usgd62bgo {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M49.63 168h40.82l17 45.58A88.35 88.35 0 0 1 49.63 168M128 156a16 16 0 1 1 16-16a16 16 0 0 1-16 16m20.46 57.59L165.55 168h40.82a88.34 88.34 0 0 1-57.91 45.59M128 96a136.38 136.38 0 0 0-88 32.33V128a88 88 0 0 1 176 0v.33A136.38 136.38 0 0 0 128 96");
}
</style><path class="usgd62bgo"/>`,
		"fallback": "ph:steering-wheel-fill",
	});
}

export default Component;
