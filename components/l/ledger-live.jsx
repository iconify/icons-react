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
		"content": `<style>.r44fjgbdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.797 39.203A21.504 21.504 0 0 1 32.734 4.348m6.469 4.449a21.504 21.504 0 0 1-23.937 34.855m-6.469-4.449l5.657-5.657m19.092-19.092l5.657-5.657");
}
</style><path class="r44fjgbdr"/>`,
		"fallback": "arcticons:ledger-live",
	});
}

export default Component;
