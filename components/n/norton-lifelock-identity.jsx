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
		"content": `<style>.ai9s8sb_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 17.355a2 2 0 0 0-.812 3.826v2.963h1.625v-2.963A2 2 0 0 0 24 17.355");
}

.evx6b-boq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.25 28.875h3.25V43.5h4.875v-9.75h3.25v9.75H30.5V28.875h3.25v-16.25h-19.5zm4.209-18.946c0-2.999 2.462-5.429 5.5-5.429s5.5 2.43 5.5 5.429");
}
</style><path class="evx6b-boq"/><path class="ai9s8sb_e"/>`,
		"fallback": "arcticons:norton-lifelock-identity",
	});
}

export default Component;
