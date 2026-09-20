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
		"content": `<style>.pwcy8ib3y {
  fill: currentColor;
  d: path("M6.135 15.73h8.692l-2.758-3.653l-2.454 3.077l-1.588-1.885zM3.48 19V5h14v6.27l3.038-3.04v7.54l-3.038-3.04V19z");
}
</style><path class="pwcy8ib3y"/>`,
		"fallback": "material-symbols-light:video-camera-back-sharp",
	});
}

export default Component;
