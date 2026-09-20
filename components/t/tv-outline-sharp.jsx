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
		"content": `<style>.apehpubwk {
  fill: currentColor;
  d: path("M9 20v-2H3V4h18v14h-6v2zm-5-3h16V5H4zm0 0V5z");
}
</style><path class="apehpubwk"/>`,
		"fallback": "material-symbols-light:tv-outline-sharp",
	});
}

export default Component;
