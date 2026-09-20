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
		"content": `<style>.zmk3zjbio {
  fill: currentColor;
  d: path("m22 17.5l-4-4v1.7l-2-2V6H8.8l-2-2H18v6.5l4-4zM2 9V4h2l2 2H4v3zm12 11v-2h2v-2l2 2v2zm6.55 3.35L.65 3.45l1.4-1.4l19.9 19.9zM3.625 23L0 19.4L1.4 18L3 19.6v-8.1h1.5V16h1v-6H7v6h1v-5h1.5v5h1v-4H12v11z");
}
</style><path class="zmk3zjbio"/>`,
		"fallback": "material-symbols:tamper-detection-off-outline-sharp",
	});
}

export default Component;
