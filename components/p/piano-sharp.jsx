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
		"content": `<style>.z-pz2uzsh {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h3.654v-4.808h-1.25V5H5zm10.346 0H19V5h-2.404v9.192h-1.25zM9.54 19h4.923v-4.808h-1.25V5H10.79v9.192H9.54z");
}
</style><path class="z-pz2uzsh"/>`,
		"fallback": "material-symbols-light:piano-sharp",
	});
}

export default Component;
