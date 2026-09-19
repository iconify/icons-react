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
		"content": `<style>.pheioqbhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5L24.451 24L42.5 5.5zm37 37L24.451 24L5.5 42.5z");
}
</style><path class="pheioqbhr"/>`,
		"fallback": "arcticons:oxen-wallet",
	});
}

export default Component;
