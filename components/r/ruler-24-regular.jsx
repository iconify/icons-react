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
		"content": `<style>.e2x_lac-d {
  fill: currentColor;
  d: path("M9.25 2A2.25 2.25 0 0 0 7 4.25v15.5A2.25 2.25 0 0 0 9.25 22h5.5A2.25 2.25 0 0 0 17 19.75V4.25A2.25 2.25 0 0 0 14.75 2zM8.5 19h1.75a.75.75 0 0 0 0-1.5H8.5V16h3.75a.75.75 0 0 0 0-1.5H8.5v-1.75h1.75a.75.75 0 0 0 0-1.5H8.5V9.5h3.75a.75.75 0 0 0 0-1.5H8.5V6.5h1.75a.75.75 0 0 0 0-1.5H8.5v-.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75h-5.5a.75.75 0 0 1-.75-.75z");
}
</style><path class="e2x_lac-d"/>`,
		"fallback": "fluent:ruler-24-regular",
	});
}

export default Component;
