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
		"content": `<style>.kunwvzqto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.833 5.5L5.5 17.833V42.5h12.333l12.333-12.333H17.833z");
}

.pqf239bdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.167 42.5L42.5 30.167V5.5H30.167L17.834 17.833h12.333z");
}
</style><path class="kunwvzqto"/><path class="pqf239bdr"/>`,
		"fallback": "arcticons:psb",
	});
}

export default Component;
