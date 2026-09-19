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

.k1ni1b8ry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 16v16M12 16s6 4.394 6 8s-6 8-6 8m24-16s-6 4.394-6 8s6 8 6 8");
}
</style><circle class="cpk0fnbgt"/><path class="k1ni1b8ry"/>`,
		"fallback": "arcticons:twickets",
	});
}

export default Component;
