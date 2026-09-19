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
		"content": `<style>.qgodce3ad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.115 24l11.26 18.5h20.51L28.625 24l11.26-18.5h-20.51z");
}
</style><path class="qgodce3ad"/>`,
		"fallback": "arcticons:sgkb",
	});
}

export default Component;
