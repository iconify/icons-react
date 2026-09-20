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
		"content": `<style>.cbxalvbkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.8 10.5v5.555a3.367 3.367 0 1 0 6.733 0V10.5m.001 5.555v3.367m-25.068-5.555a3.367 3.367 0 1 1 6.733 0v5.555M11.466 10.5v8.922");
}

.ghxjinbmv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.2 13.867a3.367 3.367 0 1 1 6.733 0v5.555m3.779 4.611V37.5m.001-2.861l6.096-6.066m-4.156 4.136l4.792 4.771m-10.52-13.447L15.787 37.5");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="j3s9ivbxi"/><path class="cbxalvbkn"/><path class="ghxjinbmv"/>`,
		"fallback": "arcticons:museum-pass",
	});
}

export default Component;
