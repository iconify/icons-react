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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.k_9z_ta0x {
  cx: 30.302px;
  cy: 24px;
  r: 7.505px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sg0cj3bjg {
  fill: none;
  stroke: currentColor;
  d: path("M15.419 18.774h9.215");
}

.x-dhzkbmm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.419 18.774a5.226 5.226 0 1 0 0 10.452H24.6");
}
</style><circle class="k_9z_ta0x"/><path class="x-dhzkbmm"/><path class="sg0cj3bjg"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:turn-me-on",
	});
}

export default Component;
