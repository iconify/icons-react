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
		"content": `<style>.exsvg5bpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.512 5.5l-18.175 37l-18.85-17.202l17.615 7.667z");
}
</style><path class="exsvg5bpi"/>`,
		"fallback": "arcticons:supprod",
	});
}

export default Component;
