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
		"content": `<style>.e4sq83bws {
  cx: 24px;
  cy: 24px;
  r: 15px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.f7wqasbkf {
  cx: 24px;
  cy: 24px;
  r: 9px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vitkjnb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.565 3.233a21.5 21.5 0 0 1 15.203 15.203M18.435 44.767A21.5 21.5 0 0 1 3.232 29.564");
}
</style><path class="vitkjnb7x"/><circle class="e4sq83bws"/><circle class="f7wqasbkf"/>`,
		"fallback": "arcticons:moto-tag",
	});
}

export default Component;
