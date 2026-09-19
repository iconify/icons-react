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
		"content": `<style>.eryxe-bop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4V11a5 5 0 0 1 0 10v6a5 5 0 0 1 0 10v1.5a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.nyl2nvb1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 25.5h-13a4 4 0 0 0-4 4v13m17-17l-17 17");
}
</style><path class="nyl2nvb1q"/><path class="eryxe-bop"/>`,
		"fallback": "arcticons:moto-note",
	});
}

export default Component;
