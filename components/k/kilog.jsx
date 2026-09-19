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
		"content": `<style>.bejtuibyp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.875 25h25m-25-10.25h20");
}

.kgqq504yi {
  cx: 8.875px;
  cy: 25px;
  r: 0.75px;
  fill: currentColor;
}

.lnce9drau {
  cx: 8.875px;
  cy: 14.75px;
  r: 0.75px;
  fill: currentColor;
}

.qjcbgl7fv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.375 4.5l8 39");
}
</style><path class="qjcbgl7fv"/><circle class="kgqq504yi"/><circle class="lnce9drau"/><path class="bejtuibyp"/>`,
		"fallback": "arcticons:kilog",
	});
}

export default Component;
