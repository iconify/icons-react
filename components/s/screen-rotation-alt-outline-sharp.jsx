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
		"content": `<style>.svjkycbrs {
  fill: currentColor;
  d: path("M13.6 21.377L5.673 13.5H7.1l6.5 6.5l5.75-5.75h-3.312v-1h5v5h-1v-3.312zM2.962 10.731v-5h1v3.311L10.4 2.604l7.927 7.877H16.9l-6.5-6.5l-5.75 5.75h3.312v1z");
}
</style><path class="svjkycbrs"/>`,
		"fallback": "material-symbols-light:screen-rotation-alt-outline-sharp",
	});
}

export default Component;
