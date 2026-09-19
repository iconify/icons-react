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
		"content": `<style>.qqn4oqbmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.207 21.926v-6.352c-7.66 0-13.868 6.209-13.868 13.868l-.005 14.23A21.2 21.2 0 0 0 24 45.5a21 21 0 0 0 3.975-.375L21.954 34.11h6.552v-5.987h-6.692c.625-3.52 3.693-6.196 7.393-6.196Z");
}

.u0besh54i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.121 36.698A14.56 14.56 0 0 0 38.55 24c0-8.04-6.509-14.56-14.55-14.56S9.45 15.959 9.45 24v15.821a21.42 21.42 0 0 1-6.95-15.82C2.5 12.12 12.12 2.5 24 2.5S45.5 12.12 45.5 24c0 8.075-4.452 15.117-11.051 18.786z");
}
</style><path class="u0besh54i"/><path class="qqn4oqbmr"/>`,
		"fallback": "arcticons:reclamefoldernl",
	});
}

export default Component;
