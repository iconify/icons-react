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
		"content": `<style>.crc7ay_4i {
  fill: currentColor;
  d: path("M4 18H2V6h2zm8 0l-6-6l6-6l1.4 1.4L9.825 11H22v2H9.825l3.6 3.6z");
}
</style><path class="crc7ay_4i"/>`,
		"fallback": "material-symbols:keyboard-tab-rtl-outline-sharp",
	});
}

export default Component;
