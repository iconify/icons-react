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
		"content": `<style>.xat8mibiq {
  fill: currentColor;
  d: path("M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m5 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m12 5H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2M3.293 11.207a1 1 0 0 1 1.414-1.414l1.5 1.5a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 1-1.414-1.414L4.086 12z");
}
</style><path class="xat8mibiq"/>`,
		"fallback": "fluent:text-continuous-24-filled",
	});
}

export default Component;
