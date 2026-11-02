import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pc-glxx-p {
  fill: currentColor;
  d: path("M6 2.171V15H5a3 3 0 0 1-3-3V5a3 3 0 0 1 4-2.829m2 0A3 3 0 0 1 9 2h8c1.309 0 2.675.525 3.458 1.613c.258.355.436.761.523 1.191l1 5Q22 9.901 22 10v1a4 4 0 0 1-4 4h-1a.997.997 0 0 0-1 1v3a3 3 0 1 1-6 0v-1c0-1.27-.804-2.405-2-2.83Z");
}
</style><path class="pc-glxx-p"/>`,
		"fallback": "coolicons:thumbs-down-fill-round",
	});
}

export default Component;
