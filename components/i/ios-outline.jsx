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
		"content": `<style>.uoouh88dl {
  fill: currentColor;
  d: path("M4 9V7h2v2zm0 8v-6h2v6zm7 0H9q-.825 0-1.412-.587T7 15V9q0-.825.588-1.412T9 7h2q.825 0 1.413.588T13 9v6q0 .825-.587 1.413T11 17m-2-2h2V9H9zm5 2v-2h4v-2h-2q-.825 0-1.412-.587T14 11V9q0-.825.588-1.412T16 7h4v2h-4v2h2q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17z");
}
</style><path class="uoouh88dl"/>`,
		"fallback": "material-symbols:ios-outline",
	});
}

export default Component;
