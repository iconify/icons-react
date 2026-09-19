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
		"content": `<style>.m_6sczj6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.109 37.193L8.891 42.5V10.048l30.218 5.307zM19.943 7.441l19.166 3.366M8.891 5.5l6.686 1.174");
}
</style><path class="m_6sczj6j"/>`,
		"fallback": "arcticons:lightcut",
	});
}

export default Component;
