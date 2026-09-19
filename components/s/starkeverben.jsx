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
		"content": `<style>.ahyaj3bdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 15.32a8 8 0 1 0 0 15.93h0a7.13 7.13 0 1 1 0 14.25h0a21.49 21.49 0 1 1 13.52-4.78");
}

.up0kmac_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.5 25.82H24a2.54 2.54 0 1 1 0-5.08h9.5c1.41 0-.39 1.14-.39 2.54s1.8 2.54.39 2.54");
}
</style><path class="up0kmac_v"/><path class="ahyaj3bdk"/>`,
		"fallback": "arcticons:starkeverben",
	});
}

export default Component;
