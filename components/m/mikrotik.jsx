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
		"content": `<style>.l_iiygbdw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.878 6.587a21 21 0 0 0-.11 2.165a21.173 21.173 0 0 0 21.174 21.173a21.3 21.3 0 0 0 3.558-.297M5.65 9.446a29 29 0 0 0-.15 2.965a29 29 0 0 0 29.002 29.002a29 29 0 0 0 4.874-.408");
}
</style><path class="l_iiygbdw"/>`,
		"fallback": "arcticons:mikrotik",
	});
}

export default Component;
