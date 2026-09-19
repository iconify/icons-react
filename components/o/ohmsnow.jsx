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
		"content": `<style>.zgkxo_eys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 29l5.5 8.36h10.14C13.57 24.54 14.68 10.62 24 10.64s10.3 13.88 3.88 26.72H38L43.5 29");
}
</style><path class="zgkxo_eys"/>`,
		"fallback": "arcticons:ohmsnow",
	});
}

export default Component;
