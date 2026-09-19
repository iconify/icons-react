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
		"content": `<style>.fwyq2mn1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.77 37.7v5.8h-3.9v-5.78a13.88 13.88 0 0 0-27.76 0v5.78h-3.9V22.27a17.77 17.77 0 1 1 35.53 0Z");
}
</style><path class="fwyq2mn1z"/>`,
		"fallback": "arcticons:libremtunnel",
	});
}

export default Component;
