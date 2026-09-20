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
		"content": `<style>.j3s9ivbxi {
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

.o7bx93zhx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 27.734v-7.468h2.445c1.382 0 2.503 1.123 2.503 2.508s-1.12 2.508-2.503 2.508H10.5m6.752-5.016V26.8c0 .515.418.933.933.933h.28m12.85-6.487V26.8c0 .515.417.933.933.933h.28m-2.194-4.947h1.961m-8.867 3.081a1.867 1.867 0 0 1-3.734 0v-1.214a1.867 1.867 0 0 1 3.734 0m0 3.081v-4.948M37.5 25.867a1.867 1.867 0 0 1-3.734 0v-1.214a1.867 1.867 0 0 1 3.734 0m0 3.081v-4.948m-8.408 4.948v-3.08a1.867 1.867 0 0 0-3.734 0m-.001 3.08v-4.948");
}
</style><path class="o7bx93zhx"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:planta",
	});
}

export default Component;
