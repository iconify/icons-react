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
		"content": `<style>.wbk0ktbda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 26.004h5.266V42.5H10.5zM21.367 5.5h5.266v37h-5.266zm10.867 12.116H37.5V42.5h-5.266z");
}
</style><path class="wbk0ktbda"/>`,
		"fallback": "arcticons:my-data-manager",
	});
}

export default Component;
