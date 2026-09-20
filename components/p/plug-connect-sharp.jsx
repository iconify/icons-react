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
		"content": `<style>.epw_amy-n {
  fill: currentColor;
  d: path("M7.77 19v-1.115H4V12.5H2v-1h2V6.116h3.77V5h1v14zm7.46 0v-3.712h-3.75v-1h3.75V9.712h-3.75v-1h3.75V5h1v1.116H20V11.5h2v1h-2v5.385h-3.77V19z");
}
</style><path class="epw_amy-n"/>`,
		"fallback": "material-symbols-light:plug-connect-sharp",
	});
}

export default Component;
