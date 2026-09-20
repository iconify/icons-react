import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e4mbbcs1b {
  fill: currentColor;
  d: path("M17.75 29.5a6.25 6.25 0 0 1 6.125 5H42.75a1.25 1.25 0 1 1 0 2.5H23.875a6.252 6.252 0 0 1-12.25 0H5.25a1.25 1.25 0 1 1 0-2.5h6.375c.58-2.853 3.101-5 6.125-5M30.25 6a6.25 6.25 0 0 1 6.125 5h6.375a1.25 1.25 0 1 1 0 2.5h-6.375a6.252 6.252 0 0 1-12.25 0H5.25a1.25 1.25 0 1 1 0-2.5h18.875c.58-2.853 3.101-5 6.125-5");
}
</style><path class="e4mbbcs1b"/>`,
		"fallback": "fluent:options-48-filled",
	});
}

export default Component;
