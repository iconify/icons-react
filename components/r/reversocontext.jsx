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
		"content": `<style>.twhn4hk-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.749 31.263A12.973 12.973 0 0 0 24 11.028m-10.756 5.719A12.973 12.973 0 0 0 24 36.971");
}

.w1_lg0bfb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 13.032v4.875l-6.703-6.703L24 4.501h0zm.001 21.938v-4.875l6.703 6.703l-6.703 6.703z");
}
</style><path class="twhn4hk-e"/><path class="w1_lg0bfb"/>`,
		"fallback": "arcticons:reversocontext",
	});
}

export default Component;
