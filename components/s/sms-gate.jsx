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

.x3sbmu3ln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.646 28.525a3.48 3.48 0 0 0 2.92 1.314h1.75a2.93 2.93 0 0 0 2.92-2.92A2.93 2.93 0 0 0 12.316 24H10.42a2.93 2.93 0 0 1-2.92-2.92a2.93 2.93 0 0 1 2.92-2.919h1.751a3.13 3.13 0 0 1 2.919 1.314m3.022 10.364V18.16l5.838 11.68l5.838-11.678V29.84m3.122-1.315a3.48 3.48 0 0 0 2.92 1.314h1.75a2.93 2.93 0 0 0 2.92-2.92A2.93 2.93 0 0 0 37.58 24h-1.897a2.93 2.93 0 0 1-2.92-2.92a2.93 2.93 0 0 1 2.92-2.919h1.752a3.13 3.13 0 0 1 2.919 1.314");
}
</style><path class="x3sbmu3ln"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:sms-gate",
	});
}

export default Component;
