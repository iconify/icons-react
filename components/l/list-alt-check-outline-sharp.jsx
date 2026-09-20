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
		"content": `<style>.g8-wi-b2l {
  fill: currentColor;
  d: path("M5 19V5v11.235v-2.03zm-1 1V4h16v9.577h-1V5H5v14h6.962v1zm13.254 1l-2.742-2.723l.713-.708l2.029 2.029l4.057-4.057l.708.713zm-6.062-8.5h5.385v-1h-5.385zm0-3.77h5.385v-1h-5.385zm-3.846 4.04h1.539v-1.54H7.346zm0-3.77h1.539V7.462H7.346z");
}
</style><path class="g8-wi-b2l"/>`,
		"fallback": "material-symbols-light:list-alt-check-outline-sharp",
	});
}

export default Component;
