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
		"content": `<style>.a-an3qb4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.207 20.5h-9.73A12 12 0 0 0 24 12a12 12 0 0 0-11.47 8.5H2.823m-.001 7h9.71A12 12 0 0 0 24 36a12 12 0 0 0 11.47-8.5h9.708");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xycfew9_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M2.5 24h14.333l1.544-2.69l3.234 6.13L24 15.51l2.389 16.252L29.96 21.31L31.166 24H45.5");
}
</style><circle class="cpk0fnbgt"/><path class="a-an3qb4k"/><path class="xycfew9_a"/>`,
		"fallback": "arcticons:keep-alive",
	});
}

export default Component;
