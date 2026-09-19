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
		"content": `<style>.e3kmaemrf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.558 43.5c-1.662-5.297 12.827-14.125 12.827-21.707c0-7.27-12.256-15.216-15.943-17.293C24.104 9.797 9.615 18.625 9.615 26.207c0 7.27 12.256 15.216 15.943 17.293M27 18.5h1.969m-9.938 0H24m0 15v-15");
}
</style><path class="e3kmaemrf"/>`,
		"fallback": "arcticons:mytelkomsel",
	});
}

export default Component;
