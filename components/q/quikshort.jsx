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
		"content": `<style>.pcw_l4b7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.26 12.243C2.593 17.049-4.19 42.676 18.123 42.07");
}

.rntq0_x6h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.646 5.92l10.859 5.782l-2.978 12.34z");
}
</style><path class="pcw_l4b7d"/><path class="rntq0_x6h"/>`,
		"fallback": "arcticons:quikshort",
	});
}

export default Component;
