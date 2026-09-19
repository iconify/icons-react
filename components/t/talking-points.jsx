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
		"content": `<style>.i9o9p58vv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.765 20.623v-3.16L35.6 20.265H25.217c-3.135 0-5.7 2.565-5.7 5.7v8.123c0 3.134 2.565 5.7 5.7 5.7H37.8c3.135 0 5.7-2.565 5.7-5.7v-8.123c0-2.444-1.562-4.536-3.735-5.342");
}

.mzhozrb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.235 27.377v3.16l4.165-2.802h10.383c3.135 0 5.7-2.565 5.7-5.7v-8.122c0-3.135-2.565-5.7-5.7-5.7H10.2c-3.135 0-5.7 2.565-5.7 5.7v8.122c0 2.444 1.562 4.536 3.735 5.342");
}
</style><path class="i9o9p58vv"/><path class="mzhozrb9a"/>`,
		"fallback": "arcticons:talking-points",
	});
}

export default Component;
