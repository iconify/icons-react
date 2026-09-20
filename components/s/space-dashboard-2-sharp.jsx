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
		"content": `<style>.fhht-ibwb {
  fill: currentColor;
  d: path("M20 20V4zM4 20h9.5V4H4zm10.5 0H20v-7.5h-5.5zm0-8.5H20V4h-5.5z");
}
</style><path class="fhht-ibwb"/>`,
		"fallback": "material-symbols-light:space-dashboard-2-sharp",
	});
}

export default Component;
