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
		"content": `<style>.wz-3x-bec {
  fill: currentColor;
  d: path("M5 23v-8h2v3h10V6H7v3H5V1h14v22zm2-3v1h10v-1zm3-4l-1.4-1.4l1.55-1.6H2v-2h8.15L8.6 9.4L10 8l4 4zM7 4h10V3H7zm0 0V3zm0 16v1z");
}
</style><path class="wz-3x-bec"/>`,
		"fallback": "material-symbols:open-in-phone-outline-sharp",
	});
}

export default Component;
