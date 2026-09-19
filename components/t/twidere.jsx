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
		"content": `<style>.bb_gi6bzp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.4 34.22L17.25 21.06H43.5z");
}

.ee2n6o5_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.57 14.64l-6.32 6.42l-6.33-6.42l6.33-6.37z");
}

.ej23p6ndi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.2 39.72l-9.24-9.36l9.29-9.3zm.05.01V21.06l18.59 18.6z");
}

.w7n7d9vjr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 8.27h12.76l-6.33 6.37zm6.42 6.37l6.33 6.42l-6.35 6.34z");
}
</style><path class="ee2n6o5_v"/><path class="w7n7d9vjr"/><path class="ej23p6ndi"/><path class="bb_gi6bzp"/>`,
		"fallback": "arcticons:twidere",
	});
}

export default Component;
