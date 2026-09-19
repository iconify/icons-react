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
		"content": `<style>.gfemqbbvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.389 22.062v8.603m-4.286-12.986l-4.301 12.986L10.5 17.679");
}

.wefbopjdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-9.603 12.179L37.5 30.665m0-12.986l-8.603 12.986");
}

.z_bn-6bko {
  cx: 23.389px;
  cy: 18.085px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="wefbopjdk"/><circle class="z_bn-6bko"/><path class="gfemqbbvl"/>`,
		"fallback": "arcticons:vix",
	});
}

export default Component;
