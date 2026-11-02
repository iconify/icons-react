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
		"content": `<style>.x-5v2fb5a {
  fill: currentColor;
  d: path("M5 6h.01a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m4 0h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m-4 5h.01a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m4 0h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m-4 5h.01a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m4 0h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="x-5v2fb5a"/>`,
		"fallback": "coolicons:list-unordered-fill-round",
	});
}

export default Component;
