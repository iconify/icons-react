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
		"content": `<style>.vk2s7wbpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.16 20.22L24 26.05L4.5 18.22v-5A3.68 3.68 0 0 1 8.17 9.5h31.66a3.68 3.68 0 0 1 3.67 3.67v21.66a3.68 3.68 0 0 1-3.67 3.67H8.17a3.68 3.68 0 0 1-3.67-3.67v-8.78");
}
</style><path class="vk2s7wbpi"/>`,
		"fallback": "arcticons:mymail",
	});
}

export default Component;
