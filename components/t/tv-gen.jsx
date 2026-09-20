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
		"content": `<style>.ydgt1_ttj {
  fill: currentColor;
  d: path("M4.616 19.462V18q-.667 0-1.141-.475T3 16.386v-9.77q0-.666.475-1.14T4.615 5h14.77q.666 0 1.14.475T21 6.615v9.77q0 .666-.475 1.14t-1.14.475v1.462h-.5L18.369 18H5.675l-.56 1.462z");
}
</style><path class="ydgt1_ttj"/>`,
		"fallback": "material-symbols-light:tv-gen",
	});
}

export default Component;
