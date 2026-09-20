import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uxmm2orvf {
  fill: currentColor;
  d: path("m3.3 18.45l-1.8-.9l6-12l1.8.9zm6.6 0l-1.8-.9l6-12l1.8.9zm6.6 0l-1.8-.9l6-12l1.8.9z");
}
</style><path class="uxmm2orvf"/>`,
		"fallback": "material-symbols:process-chart-outline",
	});
}

export default Component;
