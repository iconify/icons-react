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
		"content": `<style>.p9h19ku1c {
  fill: currentColor;
  d: path("M3 21v-2h12v2zm0-4v-2h18v2zm0-4V3h18v10z");
}
</style><path class="p9h19ku1c"/>`,
		"fallback": "material-symbols:page-menu-ios-sharp",
	});
}

export default Component;
