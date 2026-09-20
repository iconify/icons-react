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
		"content": `<style>.zhoooy8uy {
  fill: currentColor;
  d: path("m19.5 15.5l-1.425-1.4l1.1-1.1H16v-2h3.15l-1.075-1.075L19.5 8.5L23 12zM2 5V3h12v2zm4.5 12.5h3V15H12v-3H9.5V9.5h-3V12H4v3h2.5zM1 21V6h14v15z");
}
</style><path class="zhoooy8uy"/>`,
		"fallback": "material-symbols:outpatient-med-sharp",
	});
}

export default Component;
