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
		"content": `<style>.vobw91ify {
  fill: currentColor;
  d: path("M4.038 13.963Q2 11.925 2 9t2.038-4.962T9 2t4.963 2.038T16 9t-2.037 4.963T9 16t-4.962-2.037M10 22q-.825 0-1.412-.587T8 20v-1.15q0-.35.263-.612t.637-.263q1.875 0 3.5-.625t2.975-1.975T17.35 12.4t.625-3.5q0-.375.263-.637T18.85 8H20q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22z");
}
</style><path class="vobw91ify"/>`,
		"fallback": "material-symbols:shapes-rounded",
	});
}

export default Component;
