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
		"content": `<style>.eqkpnibsz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.25 8.5v8c0 1.662 1.338 3 3 3h5.5c1.662 0 3-1.338 3-3v-8c0-1.662 1.338-3 3-3H38c1.662 0 3 1.338 3 3v31c0 1.662-1.338 3-3 3h-5.25c-1.662 0-3-1.338-3-3v-8c0-1.662-1.338-3-3-3h-5.5c-1.662 0-3 1.338-3 3v8c0 1.662-1.338 3-3 3H10c-1.662 0-3-1.338-3-3v-31c0-1.662 1.338-3 3-3h5.25c1.662 0 3 1.338 3 3");
}

.p5uql8byd {
  cx: 35.375px;
  cy: 15.5px;
  r: 2.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s94ofobxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.375 22.5v20");
}
</style><path class="eqkpnibsz"/><circle class="p5uql8byd"/><path class="s94ofobxb"/>`,
		"fallback": "arcticons:lawn-hi-touch",
	});
}

export default Component;
