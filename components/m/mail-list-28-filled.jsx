import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ta0v8ro_d {
  fill: currentColor;
  d: path("M15.083 6.283A1.75 1.75 0 0 1 15.168 5H6.25l-.184.005A3.25 3.25 0 0 0 3 8.25v.184l11 5.72l7.028-3.654H16.75a1.75 1.75 0 0 1-.902-3.25a1.76 1.76 0 0 1-.765-.967m9.196 4.217l-9.933 5.165a.75.75 0 0 1-.692 0L3 10.124v9.626l.005.184A3.25 3.25 0 0 0 6.25 23h15.5l.185-.005A3.25 3.25 0 0 0 25 19.75V10.5zM16 2.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 1 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M16.75 5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM16 8.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75");
}
</style><path class="ta0v8ro_d"/>`,
		"fallback": "fluent:mail-list-28-filled",
	});
}

export default Component;
