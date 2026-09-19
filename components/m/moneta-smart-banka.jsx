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
		"content": `<style>.at2fn5bvr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.186 28.186L42.5 42.5v-37l-37 37v-37L24 24");
}
</style><path class="at2fn5bvr"/>`,
		"fallback": "arcticons:moneta-smart-banka",
	});
}

export default Component;
