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
		"content": `<style>.eyzbr4b7i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.346 28.353a3.18 3.18 0 0 0 2.71 1.267h1.628a2.774 2.774 0 0 0 2.71-2.817h0a2.774 2.774 0 0 0-2.71-2.817H34.92a2.774 2.774 0 0 1-2.711-2.817h0a2.774 2.774 0 0 1 2.711-2.817h1.627a2.87 2.87 0 0 1 2.711 1.268M8.605 29.645v-11.29l7.185 11.29v-11.29m4.61 0v11.29M20.408 24h7.184m0-5.645v11.29");
}

.u221h-fci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 15.79v16.421h39V15.79Z");
}
</style><path class="u221h-fci"/><path class="eyzbr4b7i"/>`,
		"fallback": "arcticons:nhsapp",
	});
}

export default Component;
