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
		"content": `<style>.dmgs-kxhw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 21.317c11.398-3.936 17.941-1.125 22.592 6.133m1.789 2.914c1.943-5.98 5.93-6.872 5.93-6.872");
}

.o_vmdgbuq {
  cx: 39.922px;
  cy: 21.214px;
  r: 3.578px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="dmgs-kxhw"/><circle class="o_vmdgbuq"/>`,
		"fallback": "arcticons:petsmart",
	});
}

export default Component;
