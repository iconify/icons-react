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
		"content": `<style>.gtqrm54cf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.5 16l-4.75 16L24 16l-4.75 16l-4.75-16");
}

.i4etjbheb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.62 34.75L24 45.5L5.38 34.75v-21.5L24 2.5l18.62 10.75z");
}
</style><path class="i4etjbheb"/><path class="gtqrm54cf"/>`,
		"fallback": "arcticons:wallcraft",
	});
}

export default Component;
