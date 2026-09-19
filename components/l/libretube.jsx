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
		"content": `<style>.pe56-ow_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.022 22.268L13.979 7.232c-1.334-.77-3 .193-3 1.732v30.072c0 1.54 1.666 2.502 3 1.732L40.02 25.732c1.334-.77 1.334-2.694 0-3.464Z");
}

.ud6k9ybkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.841 24l-13.862-8.004v16.008z");
}
</style><path class="pe56-ow_y"/><path class="ud6k9ybkn"/>`,
		"fallback": "arcticons:libretube",
	});
}

export default Component;
