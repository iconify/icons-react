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
		"content": `<style>.timnc2w9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.01 4.5l3.327 6.985M10.663 43.5l8.153-27.009l5.733 19.384L34.01 4.5l-6.456 5.705");
}
</style><path class="timnc2w9k"/>`,
		"fallback": "arcticons:krungthai-business",
	});
}

export default Component;
