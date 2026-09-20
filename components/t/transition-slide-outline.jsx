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
		"content": `<style>.f59sp2bmt {
  fill: currentColor;
  d: path("M3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h2q.825 0 1.413.588T7 6v12q0 .825-.587 1.413T5 20zm0-1.975h2V5.975H3zM11 20q-.825 0-1.412-.587T9 18V6q0-.825.588-1.412T11 4h10q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zm0-1.975h10V5.975H11zm-6 0V5.975zm6 0V5.975z");
}
</style><path class="f59sp2bmt"/>`,
		"fallback": "material-symbols:transition-slide-outline",
	});
}

export default Component;
