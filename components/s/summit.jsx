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
		"content": `<style>.k-su3tqtj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.394 14.32L24 18.124l3.606-3.803zM24 38.052L4.5 33.367L24 9.949zl19.5-4.685L24 9.949");
}
</style><path class="k-su3tqtj"/>`,
		"fallback": "arcticons:summit",
	});
}

export default Component;
