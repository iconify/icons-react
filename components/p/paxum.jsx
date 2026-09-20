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
		"content": `<style>.bkszcdb8x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.52 28.661v-5.828h1.902c1.076 0 1.948.876 1.948 1.957s-.872 1.958-1.948 1.958H8.52m9.647-.018h-2.574m-.638 1.931l1.925-5.828l1.925 5.828m3.396-5.828l3.85 5.828m0-5.828l-3.85 5.828m7.854-5.828v3.898c0 1.066.862 1.93 1.925 1.93s1.925-.864 1.925-1.93v-3.898m3.784 5.822v-5.822l2.905 5.828l2.906-5.819v5.819m-39-5.149a4.167 4.167 0 0 1 4.16-4.173");
}
</style><path class="bkszcdb8x"/>`,
		"fallback": "arcticons:paxum",
	});
}

export default Component;
