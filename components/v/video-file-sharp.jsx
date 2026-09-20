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
		"content": `<style>.o5waeh1cw {
  fill: currentColor;
  d: path("M5 21V3h9.5L19 7.5V21zm9-13h4l-4-4zm-5.5 9.616h5.23v-2.077l1.847.973v-3.024l-1.846.974v-2.077H8.5z");
}
</style><path class="o5waeh1cw"/>`,
		"fallback": "material-symbols-light:video-file-sharp",
	});
}

export default Component;
