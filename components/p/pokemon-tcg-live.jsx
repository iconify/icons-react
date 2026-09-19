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
		"content": `<style>.qzfc6-0-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.064 23.99h6.002m7.848 0h6.002M9.553 4.5h28.894v39H9.553z");
}

.vx3_zx4kd {
  cx: 23.99px;
  cy: 23.99px;
  r: 9.926px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xxqd7jynt {
  cx: 23.99px;
  cy: 23.99px;
  r: 3.924px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vx3_zx4kd"/><circle class="xxqd7jynt"/><path class="qzfc6-0-u"/>`,
		"fallback": "arcticons:pokemon-tcg-live",
	});
}

export default Component;
