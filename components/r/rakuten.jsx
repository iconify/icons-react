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
		"content": `<style>.dxydvusxf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.153 37.816L11.12 42.503l-5.273-4.688zM13.98 32.053V5.497h8.875c5.12 0 9.216 3.983 9.216 8.962s-4.096 8.963-9.216 8.963h-8.874m9.208-.008l8.54 8.307");
}
</style><path class="dxydvusxf"/>`,
		"fallback": "arcticons:rakuten",
	});
}

export default Component;
