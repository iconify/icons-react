import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.noapnj96o {
  fill: currentColor;
  d: path("M11 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4M1 8a4 4 0 0 1 4-4h6a4 4 0 0 1 0 8H5a4 4 0 0 1-4-4m4-3a3 3 0 0 0 0 6h6a3 3 0 1 0 0-6z");
}
</style><path class="noapnj96o"/>`,
		"fallback": "fluent:toggle-right-16-regular",
	});
}

export default Component;
