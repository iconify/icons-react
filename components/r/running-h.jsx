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

.k_ma63bec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.819 36.34q1.732-13.585-.172-26.263M17.988 37.923q1.733-13.585-.183-26.262");
}

.r3zlspb1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.795 24.786q14.88 2.524 26.41-4.188");
}
</style><path class="r3zlspb1i"/><path class="k_ma63bec"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:running-h",
	});
}

export default Component;
