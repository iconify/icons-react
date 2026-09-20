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
		"content": `<style>.sq8js0bjz {
  fill: currentColor;
  d: path("M14.808 9.248a.75.75 0 0 0-1.06-.055l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h3.546a.75.75 0 0 0 0-1.5h-3.546l1.048-.943a.75.75 0 0 0 .055-1.059M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25zM8.998 5.5v13H19.25c.69 0 1.25-.56 1.25-1.25V6.75c0-.69-.56-1.25-1.25-1.25z");
}
</style><path class="sq8js0bjz"/>`,
		"fallback": "fluent:pane-open-24-filled",
	});
}

export default Component;
