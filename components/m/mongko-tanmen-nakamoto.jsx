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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v321tac9n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 24h43m-5.475 14.333v-7.167H7.975v7.167m.001-28.667h32.05v7.168H7.976zM24 2.5v43m-8.013-7.168h16.026");
}
</style><circle class="cpk0fnbgt"/><path class="v321tac9n"/>`,
		"fallback": "arcticons:mongko-tanmen-nakamoto",
	});
}

export default Component;
