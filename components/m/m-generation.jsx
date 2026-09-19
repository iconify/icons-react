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
		"content": `<style>.rfffqtboj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 15.28L14.258 5.5h-2.673v37H7.023m33.954 0h-4.562v-37h-2.673L24 15.28V42.5");
}
</style><path class="rfffqtboj"/>`,
		"fallback": "arcticons:m-generation",
	});
}

export default Component;
