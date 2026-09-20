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
		"content": `<style>.y2cjl_y1l {
  fill: currentColor;
  d: path("M15 19q-.825 0-1.412-.587T13 17V7q0-.825.588-1.412T15 5h2q.825 0 1.413.588T19 7v10q0 .825-.587 1.413T17 19zm-8 0q-.825 0-1.412-.587T5 17V7q0-.825.588-1.412T7 5h2q.825 0 1.413.588T11 7v10q0 .825-.587 1.413T9 19zm8-2h2V7h-2zm-8 0h2V7H7zM7 7v10zm8 0v10z");
}
</style><path class="y2cjl_y1l"/>`,
		"fallback": "material-symbols:pause-outline-rounded",
	});
}

export default Component;
