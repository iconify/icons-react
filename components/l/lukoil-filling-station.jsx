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
		"content": `<style>.gqvlrpbzk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5v23.833a4.625 4.625 0 1 1-9.25 0V5.5");
}

.kedffpbow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5v33c0 2.216 1.784 4 4 4h33l-9.25-25.084L42.5 5.5");
}
</style><path class="kedffpbow"/><path class="gqvlrpbzk"/>`,
		"fallback": "arcticons:lukoil-filling-station",
	});
}

export default Component;
