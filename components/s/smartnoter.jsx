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

.nll2onhqx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.5 31.758a13 13 0 0 1-13 0M24 15.833v12.333m-4.292-3.083v-6.167m-4.291 7.709v-9.25m-4.292 3.083v3.083m17.167 1.542v-6.167m4.291 7.709v-9.25m4.292 3.083v3.083");
}
</style><rect class="j3s9ivbxi"/><path class="nll2onhqx"/>`,
		"fallback": "arcticons:smartnoter",
	});
}

export default Component;
