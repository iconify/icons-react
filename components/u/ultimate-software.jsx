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
		"content": `<style>.rzw6xn-lt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.1 16.2h7.8V24h-7.8zm0 15.6h7.8v7.8h-7.8zm7.8-23.4h7.8v7.8h-7.8zm7.8 7.8h7.8V24h-7.8zM12.3 8.4h7.8v7.8h-7.8zM27.9 24h7.8v7.8h-7.8zm-15.6 0h7.8v7.8h-7.8zm-7.8-7.8h7.8V24H4.5z");
}
</style><path class="rzw6xn-lt"/>`,
		"fallback": "arcticons:ultimate-software",
	});
}

export default Component;
