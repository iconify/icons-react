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
		"content": `<style>.hdg6h8g2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.696 19.862l-.81-2.784c.985-.29 1.419-.488 2.403-.778m16.359-4.741q5.724-1.67 11.45-3.33l1.604 5.218M11.017 19.93L9.59 11.851l16.155-2.855l.822 4.597");
}

.mccuj-b-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.635 20.341c5.747 0 9.452.481 11.497-1.156l4.233-3.244c1.314-.965 2.588-2.073 5.003-2.11h15.99");
}

.q-xi-_bhc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 5.5h27a5 5 0 0 1 5 5v27a5 5 0 0 1-5 5h-27a5 5 0 0 1-5-5v-27a5 5 0 0 1 5-5");
}
</style><path class="q-xi-_bhc"/><path class="mccuj-b-s"/><path class="hdg6h8g2r"/>`,
		"fallback": "arcticons:paotang",
	});
}

export default Component;
