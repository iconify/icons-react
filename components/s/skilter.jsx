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
		"content": `<style>.jz2lcob1i {
  cx: 33.75px;
  cy: 24px;
  r: 6.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lmx4d2f4o {
  cx: 14.25px;
  cy: 24px;
  r: 6.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.npti33b2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m11.75 26.5l5-5m-5 0l5 5m20.449-4.654l-4.667 4.667l-2.333-2.334");
}

.p4x_2bxam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.144 17.106A9.75 9.75 0 1 0 24 24m2.856 6.894A9.75 9.75 0 1 0 24 24");
}
</style><path class="p4x_2bxam"/><circle class="lmx4d2f4o"/><circle class="jz2lcob1i"/><path class="npti33b2f"/>`,
		"fallback": "arcticons:skilter",
	});
}

export default Component;
