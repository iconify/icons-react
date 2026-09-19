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
		"content": `<style>.lagch7_7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.16 32.837l17.67-17.671c4.88-4.88 12.791-4.88 17.671-.002l-17.67 17.671c-4.88 4.88-12.792 4.881-17.672.001s-4.88-12.793 0-17.672s12.792-4.88 17.672 0");
}
</style><path class="lagch7_7o"/>`,
		"fallback": "arcticons:privy",
	});
}

export default Component;
