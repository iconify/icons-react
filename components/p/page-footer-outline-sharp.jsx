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
		"content": `<style>.gjif96bjc {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-4V3h18v14zm2-2h14V5H5zm0 0V5z");
}
</style><path class="gjif96bjc"/>`,
		"fallback": "material-symbols:page-footer-outline-sharp",
	});
}

export default Component;
