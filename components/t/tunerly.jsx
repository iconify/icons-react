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
		"content": `<style>.ze0sg2bkk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 14.25V24A9.75 9.75 0 0 0 24 24a9.75 9.75 0 0 1 19.5 0v9.75");
}
</style><path class="ze0sg2bkk"/>`,
		"fallback": "arcticons:tunerly",
	});
}

export default Component;
