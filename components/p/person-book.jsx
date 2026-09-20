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
		"content": `<style>.j9p6m-rnt {
  fill: currentColor;
  d: path("M8.775 16.525Q7.275 17.05 6 18v2h12v-2q-1.275-.95-2.775-1.475T12 16t-3.225.525M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm8.475-9.025Q15.5 11.95 15.5 10.5t-1.025-2.475T12 7T9.525 8.025T8.5 10.5t1.025 2.475T12 14t2.475-1.025");
}
</style><path class="j9p6m-rnt"/>`,
		"fallback": "material-symbols:person-book",
	});
}

export default Component;
