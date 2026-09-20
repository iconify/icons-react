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
		"content": `<style>.c9s_pvbew {
  fill: currentColor;
  d: path("M7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v3.1q.45.175.725.55T20 7.5v2q0 .475-.275.85T19 10.9V21q0 .825-.587 1.413T17 23zm2.85-7h4.3q.35 0 .6-.25t.25-.6v-3.3q0-.35-.25-.6t-.6-.25H14v-1q0-.825-.587-1.412T12 8t-1.412.588T10 10v1h-.15q-.35 0-.6.25t-.25.6v3.3q0 .35.25.6t.6.25M11 11v-1q0-.425.288-.712T12 9t.713.288T13 10v1z");
}
</style><path class="c9s_pvbew"/>`,
		"fallback": "material-symbols:mobile-lock-portrait-rounded",
	});
}

export default Component;
