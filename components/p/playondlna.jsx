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
		"content": `<style>.sf9rngbjg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.467 20.792v12.896l10.217-6.448zm-4.841 19.071h16.86m1.73-27.257a7.82 7.82 0 0 1 7.817 7.82");
}

.u6k1rcc3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.216 8.137C37 8.137 42.5 13.639 42.5 20.427M8.2 16.355h23.515c1.49 0 2.7 1.343 2.7 3v15.37c0 1.657-1.21 3-2.7 3H8.2c-1.491 0-2.7-1.343-2.7-3v-15.37c0-1.657 1.209-3 2.7-3");
}
</style><path class="u6k1rcc3r"/><path class="sf9rngbjg"/>`,
		"fallback": "arcticons:playondlna",
	});
}

export default Component;
