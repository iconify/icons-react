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
		"content": `<style>.pwa4pmb-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.861 17.639L3.5 24L24 44.5l6.361-6.361m7.778-7.778L44.5 24L24 3.5l-6.361 6.361");
}
</style><path class="pwa4pmb-z"/>`,
		"fallback": "arcticons:squircle-ide",
	});
}

export default Component;
