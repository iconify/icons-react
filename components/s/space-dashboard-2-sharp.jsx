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
		"content": `<style>.mwf_jbcay {
  fill: currentColor;
  d: path("M21 21V3zM3 21h10V3H3zm12 0h6v-8h-6zm0-10h6V3h-6z");
}
</style><path class="mwf_jbcay"/>`,
		"fallback": "material-symbols:space-dashboard-2-sharp",
	});
}

export default Component;
