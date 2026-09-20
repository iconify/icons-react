import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qyoupod9r {
  fill: currentColor;
  d: path("M2 16a7 7 0 0 1 7-7h4a1 1 0 1 1 0 2H9a5 5 0 0 0 0 10h4a1 1 0 1 1 0 2H9a7 7 0 0 1-7-7m28 0a7 7 0 0 0-7-7h-4a1 1 0 1 0 0 2h4a5 5 0 0 1 0 10h-4a1 1 0 1 0 0 2h4a7 7 0 0 0 7-7M9.5 15a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2z");
}
</style><path class="qyoupod9r"/>`,
		"fallback": "fluent:link-32-regular",
	});
}

export default Component;
