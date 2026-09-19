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
		"content": `<style>.thm_z2b0l {
  fill: currentColor;
  d: path("M19 1H5v22h14zm-5 20h-4v-1h4zm3-3H7V4h10z");
}
</style><path class="thm_z2b0l"/>`,
		"fallback": "ic:sharp-phone-android",
	});
}

export default Component;
