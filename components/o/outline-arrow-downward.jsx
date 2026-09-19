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
		"content": `<style>.wmj6xtzgt {
  fill: currentColor;
  d: path("m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z");
}
</style><path class="wmj6xtzgt"/>`,
		"fallback": "ic:outline-arrow-downward",
	});
}

export default Component;
