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
		"content": `<style>.e2ml56bej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4m2.826 1.174L6.674 41.326m0-34.652l34.652 34.652M24 5.5v37m-12.333-37v37m6.166-37v37m12.334-37v37m6.166-37v37");
}
</style><path class="e2ml56bej"/>`,
		"fallback": "arcticons:mines3d",
	});
}

export default Component;
