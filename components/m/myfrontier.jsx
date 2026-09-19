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
		"content": `<style>.hf7hzjbes {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24A18.5 18.5 0 1 0 24 5.5H5.5m12.333 6.166H5.5m0 6.166h6.167");
}
</style><path class="hf7hzjbes"/>`,
		"fallback": "arcticons:myfrontier",
	});
}

export default Component;
