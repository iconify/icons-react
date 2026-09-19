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
		"content": `<style>.bgjun3g3n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.5 24a3.5 3.5 0 1 1-3.5-3.5a3.5 3.5 0 0 1 3.5 3.5");
}

.ki47dindt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.7 15.3a12.3 12.3 0 1 1-8.7-3.6m0-9.2v18");
}

.nuypoebkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.2 8.8A21.5 21.5 0 1 1 24 2.5");
}
</style><path class="nuypoebkr"/><path class="bgjun3g3n"/><path class="ki47dindt"/>`,
		"fallback": "arcticons:networkmapper",
	});
}

export default Component;
