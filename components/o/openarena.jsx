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
		"content": `<style>.lu7xwsoxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.825 28.891c-8.09-2.198-12.674-7.625-10.972-12.99s9.22-9.19 17.998-9.156s16.396 3.917 18.236 9.295s-2.604 10.77-10.64 12.907");
}

.p8i-3mety {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.275 41.255L24.284 7.436L12.87 41.255m3.805-11.414H31.47");
}
</style><path class="p8i-3mety"/><path class="lu7xwsoxf"/>`,
		"fallback": "arcticons:openarena",
	});
}

export default Component;
