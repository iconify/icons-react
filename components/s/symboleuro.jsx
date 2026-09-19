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
		"content": `<style>.bc-ehblzx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.48 34.27a9 9 0 0 1-6.93 3.23h0a9 9 0 0 1-9-9v-8.9a9 9 0 0 1 9.05-9h0a9 9 0 0 1 7 3.26m-20.43 6.86H22.6m-11.43 6.63H22.6");
}

.p8whpqbas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2Z");
}
</style><path class="p8whpqbas"/><path class="bc-ehblzx"/>`,
		"fallback": "arcticons:symboleuro",
	});
}

export default Component;
