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
		"content": `<style>.ye3ydfbrz {
  fill: currentColor;
  d: path("M4 20V4h7.5v16zm8.5-9V4H20v7zm7.5 9h-7.5v-8H20z");
}
</style><path class="ye3ydfbrz"/>`,
		"fallback": "material-symbols-light:space-dashboard-sharp",
	});
}

export default Component;
