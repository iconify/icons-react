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
		"content": `<style>.eo-bq3b-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.007 10.071L16.293 4.5l15.6 26l4.643-2.786l4.457 7.429L27.064 43.5Z");
}
</style><path class="eo-bq3b-p"/>`,
		"fallback": "arcticons:lumicall",
	});
}

export default Component;
