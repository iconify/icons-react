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
		"content": `<style>.j0_a6jo9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 8.5h-8v31h8m23 0h8v-31h-8m-23 13.631a5.75 5.75 0 0 1 11.5 0v9.488M12.5 16.381v15.238M24 22.131a5.75 5.75 0 0 1 11.5 0v9.488");
}
</style><path class="j0_a6jo9u"/>`,
		"fallback": "arcticons:matrix",
	});
}

export default Component;
