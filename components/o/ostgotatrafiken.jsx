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
		"content": `<style>.w0r4ifbie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.8 13.847a13.252 13.252 0 1 1-8.518-3.1m0 0H43.5m-28.267 0H4.5");
}
</style><path class="w0r4ifbie"/>`,
		"fallback": "arcticons:ostgotatrafiken",
	});
}

export default Component;
