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
		"content": `<style>.dfttxdb_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.462 28.11c0 6.87-4.946 8.122-7.28 6.97c-3.12-1.541-2.54-7.597 7.28-6.97V11.67h19.13v19.604H43.5v5.058H27.374V21.154H13.462m13.564-4.822H13.462");
}
</style><path class="dfttxdb_l"/>`,
		"fallback": "arcticons:librescore",
	});
}

export default Component;
