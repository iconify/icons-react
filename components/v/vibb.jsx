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
		"content": `<style>.ic7gicc9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.868 8.558L24 25.28L17.132 8.558H5.5l12.684 30.884h11.632L42.5 8.558z");
}
</style><path class="ic7gicc9u"/>`,
		"fallback": "arcticons:vibb",
	});
}

export default Component;
