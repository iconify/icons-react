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
		"content": `<style>.vva4sfbzb {
  fill: currentColor;
  d: path("M7 17h2V7H7zm4-5h2V7h-2zm4 3h2V7h-2zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="vva4sfbzb"/>`,
		"fallback": "material-symbols:view-kanban-outline-sharp",
	});
}

export default Component;
