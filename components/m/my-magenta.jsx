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
		"content": `<style>.bq4v0rpoo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 28.696v-9.402l4.706 9.412l4.707-9.398v9.398m2.174-3.882a2.353 2.353 0 1 1 4.707 0v3.883m-4.707-6.237v6.236m4.707-3.882a2.353 2.353 0 1 1 4.707 0v3.883");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="j3s9ivbxi"/><path class="bq4v0rpoo"/>`,
		"fallback": "arcticons:my-magenta",
	});
}

export default Component;
