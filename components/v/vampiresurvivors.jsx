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

.qp6nfrroa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.264 14.71L23.847 38.92L13.43 14.71m13.023 18.162L18.347 14.71m13.486 0H36m-25 0h10.505");
}
</style><path class="qp6nfrroa"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:vampiresurvivors",
	});
}

export default Component;
