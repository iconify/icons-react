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
		"content": `<style>.nrv9x7qhg {
  cx: 20.588px;
  cy: 24.977px;
  r: 16.088px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.o5wwg_qam {
  cx: 39.169px;
  cy: 11.267px;
  r: 4.331px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="nrv9x7qhg"/><circle class="o5wwg_qam"/>`,
		"fallback": "arcticons:oreilly",
	});
}

export default Component;
