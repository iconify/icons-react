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
		"content": `<style>.x_muuibrc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.453 35.971l-3.906-3.906c-4.803-4.802-4.875-12.463-.163-17.175s12.373-4.64 17.175.163l3.906 3.906m-6.93 10.082l3.906 3.906c4.802 4.802 12.463 4.875 17.175.163s4.64-12.373-.163-17.175l-3.906-3.906");
}
</style><path class="x_muuibrc"/>`,
		"fallback": "arcticons:payzave",
	});
}

export default Component;
