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
		"content": `<style>.fag840bun {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.25 28l8.16 11.89l21.26-31.8M18.68 35.82l2.81 4.09L42.75 8.09M13.33 28l2.74 4");
}
</style><path class="fag840bun"/>`,
		"fallback": "arcticons:uae4arm",
	});
}

export default Component;
