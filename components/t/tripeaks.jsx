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
		"content": `<style>.hzpqnlmob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29a4 4 0 0 1 4 4v29a4 4 0 0 1-4 4h-29a4 4 0 0 1-4-4v-29a4 4 0 0 1 4-4");
}

.v2kkeqbgn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.5 33.157l11.58-10.911l12.213 12.072");
}

.w7hn9_bfn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m8.509 27.107l14.533-13.425l6.021 5.991m-5.235 6.157l7.264-8.477L39.5 27.1");
}
</style><path class="w7hn9_bfn"/><path class="v2kkeqbgn"/><path class="hzpqnlmob"/>`,
		"fallback": "arcticons:tripeaks",
	});
}

export default Component;
