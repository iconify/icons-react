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
		"content": `<style>.k2yns9eam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 35H38a5.5 5.5 0 0 0 5.5-5.5h0A5.5 5.5 0 0 0 38 24H10a5.5 5.5 0 0 1-5.5-5.5h0A5.5 5.5 0 0 1 10 13h32.5");
}
</style><path class="k2yns9eam"/>`,
		"fallback": "arcticons:shkolo",
	});
}

export default Component;
