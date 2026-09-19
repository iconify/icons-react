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
		"content": `<style>.dv_8afwqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.672 12.328l6.828 6.828l-23.216 23.216L5.5 42.5l.128-13.784L28.844 5.5");
}
</style><path class="dv_8afwqc"/>`,
		"fallback": "arcticons:notewise",
	});
}

export default Component;
