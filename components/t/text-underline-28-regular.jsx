import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ciigd1b3y {
  fill: currentColor;
  d: path("M20.251 22.5a.75.75 0 0 1 0 1.5H7.754a.75.75 0 0 1 0-1.5zm-1-18.5a.75.75 0 0 1 .75.75v9.252a5.999 5.999 0 0 1-11.997 0V4.75a.75.75 0 1 1 1.5 0v9.252a4.498 4.498 0 0 0 8.997 0V4.75a.75.75 0 0 1 .75-.75");
}
</style><path class="ciigd1b3y"/>`,
		"fallback": "fluent:text-underline-28-regular",
	});
}

export default Component;
