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
		"content": `<style>.vtg20ed0w {
  fill: currentColor;
  d: path("M11 13h2V9h-2zm-6 6v-2h4v2zm10 0v-2h4v2zm-8-6q.825 0 1.413-.587T9 11t-.587-1.412T7 9t-1.412.588T5 11t.588 1.413T7 13m10 0q.825 0 1.413-.587T19 11t-.587-1.412T17 9t-1.412.588T15 11t.588 1.413T17 13M4 16q-.825 0-1.412-.587T2 14V8q0-.825.588-1.412T4 6h16q.825 0 1.413.588T22 8v6q0 .825-.587 1.413T20 16zm0-2h16V8H4zm8-3");
}
</style><path class="vtg20ed0w"/>`,
		"fallback": "material-symbols:soundbar-outline",
	});
}

export default Component;
