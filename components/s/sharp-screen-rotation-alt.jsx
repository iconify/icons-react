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
		"content": `<style>.hha-w6lbv {
  fill: currentColor;
  d: path("m4 7.59l6.41-6.41L20.24 11h-2.83L10.4 4L5.41 9H8v2H2V5h2zM20 19h2v-6h-6v2h2.59l-4.99 5l-7.01-7H3.76l9.83 9.83L20 16.41z");
}
</style><path class="hha-w6lbv"/>`,
		"fallback": "ic:sharp-screen-rotation-alt",
	});
}

export default Component;
