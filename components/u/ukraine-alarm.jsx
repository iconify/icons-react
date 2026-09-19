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
		"content": `<style>.bh-_jcb_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.051 27.876c7.697 0 12.533 3.364 17.748 8.075V12.05c-5.215 4.71-10.051 8.075-17.748 8.075M33.8 27.028a3.028 3.028 0 1 0 0-6.056m-22.627 6.904v13.379");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.gemx54bbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.173 20.124h4.878v7.752h-4.878z");
}
</style><circle class="cpk0fnbgt"/><path class="gemx54bbp"/><path class="bh-_jcb_d"/>`,
		"fallback": "arcticons:ukraine-alarm",
	});
}

export default Component;
