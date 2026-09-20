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
		"content": `<style>.hgajco8co {
  fill: currentColor;
  d: path("M4 15v-2h16v2zm0 4v-2h16v2zm0-8V9h16v2zm0-4V5h16v2z");
}
</style><path class="hgajco8co"/>`,
		"fallback": "material-symbols:view-headline-outline",
	});
}

export default Component;
