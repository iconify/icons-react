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
		"content": `<style>.ppyg-_1zg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.7 5.7v5.9a12.86 12.86 0 0 0-3.8 23.1l3.8-3.9v11.5C.2 38.3.6 9.7 20.7 5.7m6.6 36.6v-5.9a12.86 12.86 0 0 0 3.8-23.1l-3.8 3.9V5.7c20.5 4 20.1 32.6 0 36.6");
}
</style><path class="ppyg-_1zg"/>`,
		"fallback": "arcticons:pokitmeter",
	});
}

export default Component;
