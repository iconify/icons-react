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
		"content": `<style>.awh7jlb-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40 10.544v12l-2.5-2l-2.5 2v-12");
}

.bwu7ehs4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 35.5v-23a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2v23a2 2 0 0 0 2 2h35a2 2 0 0 0 2-2M24 10.5v27");
}
</style><path class="bwu7ehs4n"/><path class="awh7jlb-b"/>`,
		"fallback": "arcticons:lithium",
	});
}

export default Component;
