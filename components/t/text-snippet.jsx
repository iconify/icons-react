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
		"content": `<style>.syunwkbdg {
  fill: currentColor;
  d: path("M5.616 20q-.667 0-1.141-.475T4 18.386V5.615q0-.666.475-1.14T5.615 4h9.174L20 9.211v9.173q0 .667-.475 1.141t-1.14.475zM7.5 16h9v-1h-9zm0-3.5h9v-1h-9zm0-3.5h5.73V8H7.5z");
}
</style><path class="syunwkbdg"/>`,
		"fallback": "material-symbols-light:text-snippet",
	});
}

export default Component;
