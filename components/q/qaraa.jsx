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
		"content": `<style>.bbbqetn0k {
  cx: 43px;
  cy: 13.044px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uncqzg63n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.353 28.916c-2.55 9.516-11.95 15.505-21.652 13.794C9 40.999 2.215 32.157 3.073 22.343S12.15 4.999 22.001 4.999");
}

.vfzxc6hxp {
  cx: 35px;
  cy: 8.498px;
  r: 2px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xenccrbth {
  cx: 30.693px;
  cy: 26.327px;
  r: 10px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="uncqzg63n"/><circle class="xenccrbth"/><circle class="vfzxc6hxp"/><circle class="bbbqetn0k"/>`,
		"fallback": "arcticons:qaraa",
	});
}

export default Component;
