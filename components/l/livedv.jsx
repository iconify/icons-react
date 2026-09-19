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
		"content": `<style>.gxpg2acir {
  cx: 36.992px;
  cy: 12.863px;
  r: 4.803px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sc2snj5nn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.51 11.223h-8.813l9.781 8.76l-5.794 4.262l19.08 15.695h6.597s.966-1.368-2.201-3.813s-12.954-10.499-12.954-10.499l5.943-4.633ZM11.111 22.965l-6.535.05a1.99 1.99 0 0 0 .543 1.936L16.763 35.07l5.07-3.248Z");
}
</style><circle class="gxpg2acir"/><path class="sc2snj5nn"/>`,
		"fallback": "arcticons:livedv",
	});
}

export default Component;
