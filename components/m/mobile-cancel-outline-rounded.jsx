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
		"content": `<style>.svar1tb5x {
  fill: currentColor;
  d: path("M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v3.1q.45.175.725.55T20 7.5v2q0 .475-.275.85T19 10.9V21q0 .825-.587 1.413T17 23zm0-2h10V3H7zm0 0V3zm5-7.6l1.65 1.65q.275.275.7.275t.7-.275t.275-.7t-.275-.7L13.4 12l1.65-1.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 10.6l-1.65-1.65q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L10.6 12l-1.65 1.65q-.275.275-.275.7t.275.7t.7.275t.7-.275z");
}
</style><path class="svar1tb5x"/>`,
		"fallback": "material-symbols:mobile-cancel-outline-rounded",
	});
}

export default Component;
