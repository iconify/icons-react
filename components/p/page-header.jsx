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
		"content": `<style>.ixw60nbui {
  fill: currentColor;
  d: path("M3 5V3h18v2zm16 2q.825 0 1.413.588T21 9v10q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19V9q0-.825.588-1.412T5 7z");
}
</style><path class="ixw60nbui"/>`,
		"fallback": "material-symbols:page-header",
	});
}

export default Component;
