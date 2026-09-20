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
		"content": `<style>.dd-q0kbtz {
  fill: currentColor;
  d: path("M4 22q-.825 0-1.412-.587T2 20V10q0-.825.588-1.412T4 8h2V2h8v4H8v8h2V8h10q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22z");
}
</style><path class="dd-q0kbtz"/>`,
		"fallback": "material-symbols:markunread-mailbox",
	});
}

export default Component;
