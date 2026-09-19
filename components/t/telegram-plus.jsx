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
		"content": `<style>.a09a1mr5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5A16.36 16.36 0 0 0 7.638 20.863A23.84 23.84 0 0 0 23.999 43.5v-6.275H24A16.363 16.363 0 0 0 24 4.5m0 21.745V15.48m-5.382 5.383h10.764");
}
</style><path class="a09a1mr5n"/>`,
		"fallback": "arcticons:telegram-plus",
	});
}

export default Component;
