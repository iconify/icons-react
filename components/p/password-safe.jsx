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
		"content": `<style>.d3hu-g1lq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.947 20.459a4.947 4.947 0 0 0-9.894 0a4.94 4.94 0 0 0 2.454 4.268l-2.166 7.762h9.317l-2.166-7.762a4.94 4.94 0 0 0 2.455-4.268M42.5 5.5l-7.829 7.829M13.329 34.671L5.5 42.5m37 0l-7.829-7.829M13.329 13.329L5.5 5.5");
}

.j60uk5vjx {
  cx: 24px;
  cy: 24px;
  r: 15.092px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="j60uk5vjx"/><path class="d3hu-g1lq"/>`,
		"fallback": "arcticons:password-safe",
	});
}

export default Component;
