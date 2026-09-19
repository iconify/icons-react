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
		"content": `<style>.egak4t0sf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.23 13.51c6.52 3 6.84 21.58 16.18 21.58S29.66 15.2 39.33 15.2a6.87 6.87 0 0 1 5.17 2.3");
}

.kfmhct5or {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.75 14.4A7.1 7.1 0 0 1 9 13.09c8.44 0 7.91 22 18.09 22c8.82 0 8.31-18.09 16.63-19.77");
}

.u-aul108h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 45.5A21.5 21.5 0 1 1 45.5 24A21.51 21.51 0 0 1 24 45.5");
}
</style><path class="u-aul108h"/><path class="kfmhct5or"/><path class="egak4t0sf"/>`,
		"fallback": "arcticons:voice",
	});
}

export default Component;
