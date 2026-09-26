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
		"content": `<style>.fjs5d_nch {
  fill: currentColor;
  d: path("M11.1258 2.5144C11.5068 1.8285 12.4932 1.8285 12.8742 2.5144L22.8742 20.5144C23.2445 21.1809 22.7625 22 22 22L2 22C1.2375 22 0.7555 21.1809 1.1258 20.5144L11.1258 2.5144ZM12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16ZM11 10L11 14L13 14L13 10Z");
}
</style><path class="fjs5d_nch"/>`,
		"fallback": "keyline-icons:triangle-alert-sharp-fill",
	});
}

export default Component;
