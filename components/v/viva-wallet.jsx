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
		"content": `<style>.z242vkboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.674 10.081l9.826 4.704l-9.244 18.673c-3.93 7.939-8.082 3.754-10.643-1.77l-9.963-21.49L4.5 14.69l8.358 18.278c5.243 11.466 10.378-.47 10.755-1.28z");
}
</style><path class="z242vkboq"/>`,
		"fallback": "arcticons:viva-wallet",
	});
}

export default Component;
