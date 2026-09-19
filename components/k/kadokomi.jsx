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
		"content": `<style>.ccoe1x2wi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.125 26.431h16.444v16.444H5.125m37-10.963l-16.444 5.482m0-10.963h16.444M25.681 42.875h16.444");
}

.e9vj0zbme {
  cx: 42.125px;
  cy: 5.875px;
  r: 0.75px;
  fill: currentColor;
}

.jfl162bjz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.236 5.875v16.444M5.125 9.986h16.444V22.32m4.112-.001V5.875m16.444 8.222H25.681");
}

.kr725makz {
  cx: 33.903px;
  cy: 5.875px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="jfl162bjz"/><circle class="kr725makz"/><circle class="e9vj0zbme"/><path class="ccoe1x2wi"/>`,
		"fallback": "arcticons:kadokomi",
	});
}

export default Component;
