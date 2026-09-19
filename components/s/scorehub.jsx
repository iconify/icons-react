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
		"content": `<style>.g3p2ctbij {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.273 8.988v8.937h9.499zm-.032 27.725l13.188-12.228a1.59 1.59 0 0 1 2.136 0l4.105 3.805a1.327 1.327 0 0 1 0 1.981L28.482 42.5h-6.297z");
}

.hva9xsbgb {
  width: 2.304px;
  height: 2.304px;
  x: 35.481px;
  y: 29.223px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 0.458px;
  ry: 0.458px;
}

.lvga9_odr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.288 24.482v-8.549L24.855 5.5H7.783c-1.047 0-1.896.85-1.896 1.897v33.197c0 1.048.849 1.897 1.896 1.897h20.438M24.855 5.5l10.433 10.433");
}
</style><path class="lvga9_odr"/><path class="g3p2ctbij"/><rect transform="rotate(-44.999 36.633 30.375)" class="hva9xsbgb"/>`,
		"fallback": "arcticons:scorehub",
	});
}

export default Component;
