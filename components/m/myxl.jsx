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
		"content": `<style>.gdqbly48t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.645 31.085v-3.094h7.021l4.082-6.645H28.645V10.243L22 14.324v9.027");
}

.jp0xl_big {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.551 34.467l-14.598-16.99H8.122l7.298 8.495l-7.298 8.495h8.831l2.883-3.355l2.883 3.355z");
}
</style><path class="jp0xl_big"/><path class="gdqbly48t"/>`,
		"fallback": "arcticons:myxl",
	});
}

export default Component;
