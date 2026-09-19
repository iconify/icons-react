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
		"content": `<style>.bebk-1lcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.5 4.5v39L18.833 22.833");
}

.la_b1yb_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 43.5v-39l20.667 20.667M8.5 43.5L20 32");
}
</style><path class="bebk-1lcv"/><path class="la_b1yb_k"/>`,
		"fallback": "arcticons:next-fit",
	});
}

export default Component;
