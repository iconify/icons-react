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
		"content": `<style>.b9-_x9bfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.905 23.711a10.095 10.095 0 0 0 20.19 0v0l-.001-18.694a21.5 21.5 0 1 1-20.188 0h0z");
}

.v21h77bvl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.7 5.017v19.231h0a1.7 1.7 0 0 1-3.4 0h0V5.017");
}
</style><path class="b9-_x9bfd"/><path class="v21h77bvl"/>`,
		"fallback": "arcticons:unstoppable",
	});
}

export default Component;
