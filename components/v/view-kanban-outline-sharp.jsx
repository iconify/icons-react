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
		"content": `<style>.n0xwgtbfg {
  fill: currentColor;
  d: path("M7.5 16.5h1v-9h-1zm4-5h1v-4h-1zm4 3h1v-7h-1zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="n0xwgtbfg"/>`,
		"fallback": "material-symbols-light:view-kanban-outline-sharp",
	});
}

export default Component;
