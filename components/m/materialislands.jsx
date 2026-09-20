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
		"content": `<style>.b638um2po {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.45 30.24L24 28.18l-13.45 2.06L24 4.5z");
}

.boo92bs_p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.55 30.24L24 28.18l13.45 2.06L24 43.5zM24 4.5v39");
}
</style><path class="b638um2po"/><path class="boo92bs_p"/>`,
		"fallback": "arcticons:materialislands",
	});
}

export default Component;
