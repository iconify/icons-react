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
		"content": `<style>.zg20isb4j {
  fill: currentColor;
  d: path("M6 14v-4H4v10h16V10H10V8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22H4q-.825 0-1.412-.587T2 20V10q0-.825.588-1.412T4 8h2V2h8v4H8v8zm-2-4v4zv10z");
}
</style><path class="zg20isb4j"/>`,
		"fallback": "material-symbols:markunread-mailbox-outline",
	});
}

export default Component;
