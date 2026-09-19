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
		"content": `<style>.j1lngdvbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.56 42.9l-7.12-7.5l7.12-7.51m-18.32-.35c-1-11.61 2.44-15.9 18.33-14.93");
}

.mhoj3acuf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.76 20.46c1 11.61-2.44 15.9-18.33 14.93");
}

.t4nnyrb1x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.47 5.13l7.12 7.5l-7.12 7.51");
}
</style><path class="mhoj3acuf"/><path class="j1lngdvbr"/><path class="t4nnyrb1x"/>`,
		"fallback": "arcticons:myphoneexplorerclient",
	});
}

export default Component;
