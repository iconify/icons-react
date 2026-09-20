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
		"content": `<style>.q3kgf5jrh {
  fill: currentColor;
  d: path("M17 13.5a1.5 1.5 0 0 0-1.5-1.5h-7A1.5 1.5 0 0 0 7 13.5v.5c0 1.971 1.86 4 5 4s5-2.029 5-4zm-2.25-5.25a2.75 2.75 0 1 0-5.5 0a2.75 2.75 0 0 0 5.5 0M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-1.5 0a8.5 8.5 0 1 0-17 0a8.5 8.5 0 0 0 17 0");
}
</style><path class="q3kgf5jrh"/>`,
		"fallback": "fluent:person-circle-24-regular",
	});
}

export default Component;
