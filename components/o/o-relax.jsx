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

.p_9abex7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12 21.794c3.906 0 6.035 2.498 8 4.768s4.094 4.768 8 4.768m-8-14.66c3.906 0 6.035 2.499 8 4.768c1.965 2.27 4.094 4.768 8 4.768");
}
</style><path class="p_9abex7v"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:o-relax",
	});
}

export default Component;
