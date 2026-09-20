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
		"content": `<style>.afhptwb_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.48 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29.04a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z");
}

.ectqgdbwl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 26.736v-3.367a2.104 2.104 0 1 1 4.209 0v3.367m0-3.367a2.104 2.104 0 1 1 4.209 0v3.367m5.806-1.01a2.104 2.104 0 0 1-3.933-1.043v-1.367a2.104 2.104 0 0 1 4.209 0V24h-4.21M25 26.736v-3.367a2.104 2.104 0 1 1 4.209 0v3.367m.001-3.367a2.104 2.104 0 1 1 4.209 0v3.367m5.805-1.01a2.104 2.104 0 0 1-3.933-1.043v-1.367a2.104 2.104 0 0 1 4.209 0V24h-4.209");
}
</style><path class="afhptwb_j"/><path class="ectqgdbwl"/>`,
		"fallback": "arcticons:meme-generator",
	});
}

export default Component;
