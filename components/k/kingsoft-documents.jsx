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
		"content": `<style>.rmfn2p5hh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.692 29.376l-9.31 5.376L24 45.5l18.618-10.748V13.248L24 2.5L5.382 13.248L24 24v21.5");
}

.vmr8k3b4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.69 18.624L5.382 24l18.62 10.75M24 24l18.618-10.752");
}

.ydnbyrvio {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 34.75l9.31-5.375v-10.75m0 10.75l9.309 5.375");
}
</style><path class="rmfn2p5hh"/><path class="vmr8k3b4k"/><path class="ydnbyrvio"/>`,
		"fallback": "arcticons:kingsoft-documents",
	});
}

export default Component;
