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
		"content": `<style>.b1xz1f56j {
  fill: currentColor;
  d: path("M7 7.171a3 3 0 0 1 0 5.658V21a1 1 0 0 1-2 0v-8.171a3 3 0 0 1 0-5.658V3a1 1 0 0 1 2 0Zm6 6a3 3 0 0 1 0 5.658V21a1 1 0 0 1-2 0v-2.171a3 3 0 0 1 0-5.658V3a1 1 0 0 1 2 0Zm6-8a3 3 0 0 1 0 5.658V21a1 1 0 0 1-2 0V10.829a3 3 0 0 1 0-5.658V3a1 1 0 0 1 2 0Z");
}
</style><path class="b1xz1f56j"/>`,
		"fallback": "coolicons:slider-vertical-2-fill-sharp",
	});
}

export default Component;
