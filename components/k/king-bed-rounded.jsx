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
		"content": `<style>.e26dcutmp {
  fill: currentColor;
  d: path("M2 11.975q0-.825.588-1.4T4 10V7q0-.825.588-1.412T6 5h12q.825 0 1.413.588T20 7v3q.825 0 1.413.588T22 12v3.65q0 .575-.387.963T20.65 17l-.55 1.675q-.05.15-.175.238T19.65 19h-.3q-.15 0-.275-.088t-.175-.237L18.35 17H5.65l-.55 1.675q-.05.15-.175.238T4.65 19h-.3q-.15 0-.275-.088t-.175-.237L3.35 17q-.575 0-.962-.387T2 15.65zM13 10h5V7h-5zm-7 0h5V7H6z");
}
</style><path class="e26dcutmp"/>`,
		"fallback": "material-symbols:king-bed-rounded",
	});
}

export default Component;
