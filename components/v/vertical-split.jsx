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
		"content": `<style>.n59-0kbri {
  fill: currentColor;
  d: path("M3 15v-2h8v2zm0 4v-2h8v2zm0-8V9h8v2zm0-4V5h8v2zm12 12q-.825 0-1.412-.587T13 17V7q0-.825.588-1.412T15 5h4q.825 0 1.413.588T21 7v10q0 .825-.587 1.413T19 19z");
}
</style><path class="n59-0kbri"/>`,
		"fallback": "material-symbols:vertical-split",
	});
}

export default Component;
