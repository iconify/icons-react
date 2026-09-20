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
		"content": `<style>.u2dpm4jom {
  fill: currentColor;
  d: path("M3 21V3h7v18zm8-16V3h2v2zm2 2V5h2v2zm2-2V3h2v2zm4 0V3h2v2zm-2 2V5h2v2zm-6 2V7h2v2zm4 0V7h2v2zm4 0V7h2v2zm-6 2V9h2v2zm4 0V9h2v2zm-6 2v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-6 2v-2h2v2zm4 0v-2h2v2zm-6 2v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm-6 2v-2h2v2zm4 0v-2h2v2zm-6 2v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2z");
}
</style><path class="u2dpm4jom"/>`,
		"fallback": "material-symbols:transition-fade-outline-sharp",
	});
}

export default Component;
