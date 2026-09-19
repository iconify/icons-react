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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nte4q7buz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.43 12.783v19.862a5.855 5.855 0 0 0 5.855 5.855h2.706M14.545 18.888h11.521m4.706 0a4.705 4.705 0 0 0-4.706-4.705m9.389 4.705A9.39 9.39 0 0 0 26.066 9.5");
}
</style><path class="nte4q7buz"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:tuya-smart",
	});
}

export default Component;
