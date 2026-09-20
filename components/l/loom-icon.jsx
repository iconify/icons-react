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
		"content": `<style>.n4dplbc9w {
  fill: var(--svg-color--625df5, #625df5);
  d: path("M256 113.765h-74.858l64.83-37.43l-14.237-24.667l-64.83 37.43l37.421-64.825l-24.667-14.246l-37.421 64.826V0h-28.476v74.86L76.326 10.027L51.667 24.266L89.096 89.09L24.265 51.668l-14.238 24.66l64.83 37.43H0v28.477h74.85l-64.823 37.43l14.238 24.667l64.824-37.423l-37.43 64.825l24.667 14.239l37.429-64.832V256h28.476v-74.853l37.422 64.826l24.665-14.239l-37.428-64.832l64.83 37.43l14.24-24.667l-64.825-37.423h74.85v-28.477zM128 166.73c-21.472 0-38.876-17.403-38.876-38.876S106.528 88.977 128 88.977s38.875 17.404 38.875 38.876c0 21.473-17.403 38.876-38.875 38.876");
}
</style><path class="n4dplbc9w"/>`,
		"fallback": "logos:loom-icon",
	});
}

export default Component;
