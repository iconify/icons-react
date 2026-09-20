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
		"content": `<style>.k_6z_abxn {
  fill: currentColor;
  d: path("M6 21v-2h5v-5.15L1.4 4.225L2.8 2.8l18.4 18.4l-1.425 1.425L13 15.85V19h5v2zm8.8-9.05L9.85 7h6.7l1.8-2H7.85l-2-2H21v2z");
}
</style><path class="k_6z_abxn"/>`,
		"fallback": "material-symbols:no-drinks",
	});
}

export default Component;
