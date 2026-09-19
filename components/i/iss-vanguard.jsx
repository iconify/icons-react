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
		"content": `<style>.i0h883bjf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.772 17.44h5.404l5.805 9.642l6.098-9.86h5.112l-11.21 19.28zM5.511 9.7l-.51-1.168h10.953M42.489 9.7L43 8.533H32.046m-13.973-.001h11.684M7.336 13.06H40.42");
}

.nlsmhs68s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.282 16.706L23.988 41.468L9.68 17.222");
}
</style><path class="nlsmhs68s"/><path class="i0h883bjf"/>`,
		"fallback": "arcticons:iss-vanguard",
	});
}

export default Component;
