import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k9n94x3ed {
  fill: currentColor;
  d: path("M232 44H24A20 20 0 0 0 4 64v128a20 20 0 0 0 20 20h208a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20m-4 144H28V68h200ZM48 148v-40a12 12 0 0 1 20.49-8.49L88 119l19.51-19.52A12 12 0 0 1 128 108v40a12 12 0 0 1-24 0v-11l-7.51 7.52a12 12 0 0 1-17 0L72 137v11a12 12 0 0 1-24 0m98.63-23.5a12 12 0 0 1 16.87-1.87l.5.4V108a12 12 0 0 1 24 0v15l.5-.4a12 12 0 0 1 15 18.74l-20 16a12 12 0 0 1-15 0l-20-16a12 12 0 0 1-1.87-16.84");
}
</style><path class="k9n94x3ed"/>`,
		"fallback": "ph:markdown-logo-bold",
	});
}

export default Component;
