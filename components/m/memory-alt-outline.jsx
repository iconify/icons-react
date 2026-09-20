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
		"content": `<style>.y92ydgiyv {
  fill: currentColor;
  d: path("M6 15h2V9H6zm5 0h2V9h-2zm5 0h2V9h-2zM4 17h16V7H4zm0 0V7zm1 4v-2H4q-.825 0-1.412-.587T2 17V7q0-.825.588-1.412T4 5h1V3h2v2h4V3h2v2h4V3h2v2h1q.825 0 1.413.588T22 7v10q0 .825-.587 1.413T20 19h-1v2h-2v-2h-4v2h-2v-2H7v2z");
}
</style><path class="y92ydgiyv"/>`,
		"fallback": "material-symbols:memory-alt-outline",
	});
}

export default Component;
