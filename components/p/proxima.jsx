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
		"content": `<style>.h76irkb1y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.079 6.64c.518.079 23.763-.04 23.763-.04L42.5 17.973l-6.658 11.893H12.278L5.5 41.4h11.563l13.516-23.108l-11.403-.04l-7.097-11.614Z");
}
</style><path class="h76irkb1y"/>`,
		"fallback": "arcticons:proxima",
	});
}

export default Component;
