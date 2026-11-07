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
		"content": `<style>.c9l3e3b9g {
  fill: currentColor;
  d: path("M14 18v-2h4V4h-6v2.25h-2V4q0-.825.588-1.412T12 2h6q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm-8 2h6V8H6zm0 2q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h6q.825 0 1.413.588T14 8v12q0 .825-.587 1.413T12 22zm0-2V8zM18 4v12z");
}
</style><path class="c9l3e3b9g"/>`,
		"fallback": "material-symbols:mirror-stack-outline",
	});
}

export default Component;
