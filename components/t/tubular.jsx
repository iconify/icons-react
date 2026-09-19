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
		"content": `<style>.dv9_d-oso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.51 10.49l21.123 13.46L5.5 37.51z");
}

.graezgbrw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.189 10.49L42.5 23.95L19.013 37.51");
}
</style><path class="graezgbrw"/><path class="dv9_d-oso"/>`,
		"fallback": "arcticons:tubular",
	});
}

export default Component;
