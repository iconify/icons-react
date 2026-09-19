import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dpnzz-44k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.75 13.25L45.5 24L24 45.5L2.5 24L24 2.5zv21.5l-15.357-6.143l-6.143 6.143v-21.5l15.357 6.143z");
}
</style><path class="dpnzz-44k"/>`,
		"fallback": "arcticons:nissay",
	});
}

export default Component;
