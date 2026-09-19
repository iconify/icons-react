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
		"content": `<style>.e_dttnjam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.065 16.635c-.875 7.797 5.334 9.784 5.493 11.921c.449 6.054-5.63 10.174-3.608 12.858c3.806 5.05 21.808-8.401 21.808-21.983C30.758 9.136 23.335 5.5 19.124 5.5c-6.325 0-11.185 3.345-12.059 11.135");
}

.td9lmjbgj {
  cx: 38.211px;
  cy: 25.31px;
  r: 2.809px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uk1xycb6s {
  cx: 38.211px;
  cy: 14.15px;
  r: 2.809px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="e_dttnjam"/><circle class="uk1xycb6s"/><circle class="td9lmjbgj"/>`,
		"fallback": "arcticons:perfect-ear",
	});
}

export default Component;
