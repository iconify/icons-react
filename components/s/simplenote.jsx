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

.s-88ahayn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 24a10.75 10.75 0 0 1 0-21.5M24 24a10.75 10.75 0 0 1 0 21.5");
}
</style><circle class="cpk0fnbgt"/><path class="s-88ahayn"/>`,
		"fallback": "arcticons:simplenote",
	});
}

export default Component;
