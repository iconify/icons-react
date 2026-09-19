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
		"content": `<style>.bdo9uzb-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 43.5h-9.75V8.4h5.85V4.5h7.8v3.9h5.85v35.1zm0-21.45v-7.8m-3.9 3.9h7.8M24 37.65v-7.8m-3.9 3.9h7.8");
}
</style><path class="bdo9uzb-r"/>`,
		"fallback": "arcticons:savertuner",
	});
}

export default Component;
