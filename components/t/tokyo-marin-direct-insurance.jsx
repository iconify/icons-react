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
		"content": `<style>.ukdsrzbdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.978 24L40.021 5.5v37z");
}
</style><path class="ukdsrzbdl"/>`,
		"fallback": "arcticons:tokyo-marin-direct-insurance",
	});
}

export default Component;
