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
		"content": `<style>.r7a7dsb2o {
  fill: currentColor;
  d: path("M21.75 3a.75.75 0 0 1 .75.75V5h1.25a.75.75 0 0 1 0 1.5H22.5v1.25a.75.75 0 0 1-1.5 0V6.5h-1.25a.75.75 0 0 1 0-1.5H21V3.75a.75.75 0 0 1 .75-.75M8.5 6.25a.75.75 0 1 0-1.5 0V7.5H5.75a.75.75 0 1 0 0 1.5H7v1.25a.75.75 0 0 0 1.5 0V9h1.25a.75.75 0 0 0 0-1.5H8.5zm12 11.5a.75.75 0 0 0-1.5 0V19h-1.25a.75.75 0 0 0 0 1.5H19v1.25a.75.75 0 0 0 1.5 0V20.5h1.25a.75.75 0 0 0 0-1.5H20.5zm-.866-8.272a2.875 2.875 0 0 0-4.54-.636L2.806 21.088a2.88 2.88 0 1 0 4.068 4.079l12.279-12.254a2.875 2.875 0 0 0 .48-3.435m-3.482.426a1.375 1.375 0 0 1 1.942 1.947l-.842.84l-1.945-1.945zm-1.907 1.902l1.945 1.945L5.815 24.105a1.38 1.38 0 1 1-1.949-1.954z");
}
</style><path class="r7a7dsb2o"/>`,
		"fallback": "fluent:wand-28-regular",
	});
}

export default Component;
