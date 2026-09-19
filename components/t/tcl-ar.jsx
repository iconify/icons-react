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
		"content": `<style>.axnv55z3w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4m-7.44 11.904h8.74m-4.37 13.192V17.404m-15.5 0l8.74 13.192m0-13.192l-8.74 13.192");
}

.u7l7z_b0s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.8 30.596V17.404l8.74 13.192V17.404");
}
</style><path class="axnv55z3w"/><path class="u7l7z_b0s"/>`,
		"fallback": "arcticons:tcl-ar",
	});
}

export default Component;
