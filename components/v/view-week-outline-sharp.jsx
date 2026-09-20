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
		"content": `<style>.cas7lohbe {
  fill: currentColor;
  d: path("M4 18h4.673V6H4zm5.673 0h4.654V6H9.673zm5.654 0H20V6h-4.673zM21 19H3V5h18z");
}
</style><path class="cas7lohbe"/>`,
		"fallback": "material-symbols-light:view-week-outline-sharp",
	});
}

export default Component;
