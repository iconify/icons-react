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
		"content": `<style>.pey5fka3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.287 42.03a21.54 21.54 0 0 1 30.167-30.698m0 0L11.287 42.031");
}

.vm08pvb_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.662 33.508C2.642 10.55 12.786 2.656 33.38 19.548m-3.728 9.834L42.5 42.2");
}
</style><path class="pey5fka3c"/><path class="vm08pvb_r"/>`,
		"fallback": "arcticons:vacation-days",
	});
}

export default Component;
