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

.unva10bxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 30.303h14.569V38.5c7.97 0 14.431-6.492 14.431-14.5h-29c0-8.008 6.46-14.5 14.431-14.5v8.197H38.5");
}
</style><path class="unva10bxd"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:seker-mobil",
	});
}

export default Component;
