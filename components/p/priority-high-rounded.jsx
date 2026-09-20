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
		"content": `<style>.xu_bhwaeb {
  fill: currentColor;
  d: path("M12 21q-.825 0-1.412-.587T10 19t.588-1.412T12 17t1.413.588T14 19t-.587 1.413T12 21m0-6q-.825 0-1.412-.587T10 13V5q0-.825.588-1.412T12 3t1.413.588T14 5v8q0 .825-.587 1.413T12 15");
}
</style><path class="xu_bhwaeb"/>`,
		"fallback": "material-symbols:priority-high-rounded",
	});
}

export default Component;
