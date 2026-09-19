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
		"content": `<style>.ehf_igbkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 9.2h3.7v0h25.9a3.98 3.98 0 0 1 3.7 3.7l.112 20.736M9.281 13.743L9.2 35.1a3.98 3.98 0 0 0 3.7 3.7h25.9v0h3.7");
}

.kuectnxmd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.6 31.4v-3.7l11.1-11.1l3.7 3.7l-11.1 11.1Z");
}
</style><path class="ehf_igbkb"/><path class="kuectnxmd"/>`,
		"fallback": "arcticons:screenmaster",
	});
}

export default Component;
