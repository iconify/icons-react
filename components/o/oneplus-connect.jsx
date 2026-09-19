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
		"content": `<style>.e3ssygbgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m6.247 34.25l35.507-20.5L24 3.5L6.247 13.75zL24 44.5l17.754-10.25l-35.507-20.5");
}
</style><path class="e3ssygbgp"/>`,
		"fallback": "arcticons:oneplus-connect",
	});
}

export default Component;
