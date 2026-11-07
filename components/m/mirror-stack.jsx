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
		"content": `<style>.rg1o8fbnn {
  fill: currentColor;
  d: path("M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h6q.825 0 1.413.588T14 8v12q0 .825-.587 1.413T12 22zm10-4V7q0-1.25-.875-2.125T13 4h-3q0-.825.588-1.412T12 2h6q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18z");
}
</style><path class="rg1o8fbnn"/>`,
		"fallback": "material-symbols:mirror-stack",
	});
}

export default Component;
