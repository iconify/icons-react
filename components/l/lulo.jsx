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
		"content": `<style>.w6ga-cb4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 30.167h12.333V5.5H5.499v37h37V17.833H17.832z");
}
</style><path class="w6ga-cb4o"/>`,
		"fallback": "arcticons:lulo",
	});
}

export default Component;
