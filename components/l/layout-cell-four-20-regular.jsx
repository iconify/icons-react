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
		"content": `<style>.ubssb8bvw {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v3.5h5.5V4zm3.5 6.5H4V14a2 2 0 0 0 2 2h3.5zm1 0V16H14a2 2 0 0 0 2-2v-3.5zm5.5-1V6a2 2 0 0 0-2-2h-3.5v5.5z");
}
</style><path class="ubssb8bvw"/>`,
		"fallback": "fluent:layout-cell-four-20-regular",
	});
}

export default Component;
