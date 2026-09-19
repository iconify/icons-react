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
		"content": `<style>.q32tawu3h {
  fill: currentColor;
  d: path("M13.21 17.37a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97v-5.51l-5.27-.61zM11 9h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z");
}
</style><path class="q32tawu3h"/>`,
		"fallback": "ic:sharp-settings-phone",
	});
}

export default Component;
