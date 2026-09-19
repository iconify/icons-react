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
		"content": `<style>.ue-rr2bhm {
  fill: currentColor;
  d: path("M5 15h14V9.05H5zm6-14v3h2V1zm8.04 2.6l-1.79 1.79l1.41 1.41l1.8-1.79zM13 23v-2.95h-2V23zm7.45-3.91l-1.8-1.79l-1.41 1.41l1.79 1.8zM3.55 5.01L5.34 6.8l1.41-1.41L4.96 3.6zM4.96 20.5l1.79-1.8l-1.41-1.41l-1.79 1.79z");
}
</style><path class="ue-rr2bhm"/>`,
		"fallback": "ic:sharp-wb-iridescent",
	});
}

export default Component;
