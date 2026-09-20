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
		"content": `<style>.pqmmrybnr {
  fill: currentColor;
  d: path("M4 21v-2h16v2zm0-4V3h18v7h-4v7zm2-2h10V5H6zm12-7h2V5h-2zM6 15h10z");
}
</style><path class="pqmmrybnr"/>`,
		"fallback": "material-symbols:local-cafe-outline-sharp",
	});
}

export default Component;
