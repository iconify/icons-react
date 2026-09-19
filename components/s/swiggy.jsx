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
		"content": `<style>.ncgopslcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.199 18.479H25.955v-5.924M14.502 29.442h10.122v4.554");
}

.va1si9bnw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.223 17.723a13.223 13.223 0 0 0-26.446 0C10.777 27.773 24 43.5 24 43.5s13.223-15.727 13.223-25.777");
}
</style><path class="va1si9bnw"/><path class="ncgopslcz"/>`,
		"fallback": "arcticons:swiggy",
	});
}

export default Component;
