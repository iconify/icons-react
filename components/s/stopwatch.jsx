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
		"content": `<style>.jm60gobdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.033 4.5h6.83v4.504h-6.83zm3.415 24.604v-13.72m-1.334-3.888V9.008m2.668 2.488V9.008M6.517 16.857l2.34-3.452l2.849 1.932l-2.34 3.451zm4.019.205l1.777 1.206");
}

.kxqi7cc3j {
  cx: 25.448px;
  cy: 27.465px;
  r: 16.035px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="kxqi7cc3j"/><path class="jm60gobdy"/>`,
		"fallback": "arcticons:stopwatch",
	});
}

export default Component;
