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
		"content": `<style>.lojp-cbdw {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h6.5V5H5zm7.5 0H19v-7h-6.5zm0-8H19V5h-6.5z");
}
</style><path class="lojp-cbdw"/>`,
		"fallback": "material-symbols-light:space-dashboard-outline-sharp",
	});
}

export default Component;
