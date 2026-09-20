import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.s51bzi0_x {
  fill: currentColor;
  d: path("M3.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm3 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm4 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm4 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM9.854 4.146a.5.5 0 0 0-.708 0l-4.5 4.5a.5.5 0 1 0 .708.708L9 5.707V15.5a.5.5 0 0 0 1 0V5.707l3.646 3.647a.5.5 0 0 0 .708-.708zM3.5 17a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1z");
}
</style><path class="s51bzi0_x"/>`,
		"fallback": "fluent:padding-top-20-regular",
	});
}

export default Component;
