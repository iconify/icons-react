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
		"content": `<style>.l-4kcwb3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 8.498L6.1 39.502h35.8l-3.464-6H16.492L24 20.498l7.508 13.004h6.928z");
}
</style><path class="l-4kcwb3x"/>`,
		"fallback": "arcticons:sankaku-black",
	});
}

export default Component;
