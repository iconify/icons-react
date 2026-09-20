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
		"content": `<style>.g15o5fmut {
  fill: currentColor;
  d: path("M3 20.077V3h18v6.616h-1V4H4v13.644L5.65 16h9.273v1H6.077zM4 16v1.385V4zm14.923 4.77V17h-1.23v-4.615h2.788l-1.123 3.23h1.757z");
}
</style><path class="g15o5fmut"/>`,
		"fallback": "material-symbols-light:quickreply-outline-sharp",
	});
}

export default Component;
