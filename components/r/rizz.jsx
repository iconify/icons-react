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

.yv38ukbvv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 29.501V18.5h3.602a3.69 3.69 0 0 1 3.687 3.695a3.69 3.69 0 0 1-3.686 3.695H9.5m3.6 0l3.602 3.61m2.465-11.001V29.5m2.377-11h7.289l-7.289 11h7.289m2.377-11h7.29l-7.29 11h7.29");
}
</style><rect class="j3s9ivbxi"/><path class="yv38ukbvv"/>`,
		"fallback": "arcticons:rizz",
	});
}

export default Component;
