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
		"content": `<style>.snu7usbwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.22 5.5h25.147l-4.476 18.23M39.367 5.5L21.841 21.892m-9.621 2.472L8.634 42.5H31.97m-6.668-16.043L8.632 42.5");
}
</style><path class="snu7usbwq"/>`,
		"fallback": "arcticons:transfermovil",
	});
}

export default Component;
