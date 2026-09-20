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
		"content": `<style>.hl2dqbcwr {
  fill: currentColor;
  d: path("M15 18h8v2h-8zM5 19V5zm7-13q-1.25 0-2.125.875T9 9t.875 2.125T12 12t2.125-.875T15 9t-.875-2.125T12 6m-1.15 2.65Q11 8.8 11 9t-.15.35t-.35.15t-.35-.15T10 9t.15-.35t.35-.15t.35.15m1.5 0q.15.15.15.35t-.15.35t-.35.15t-.35-.15T11.5 9t.15-.35t.35-.15t.35.15m1.5 0Q14 8.8 14 9t-.15.35t-.35.15t-.35-.15T13 9t.15-.35t.35-.15t.35.15M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v8h-2V5H5v14h8v2z");
}
</style><path class="hl2dqbcwr"/>`,
		"fallback": "material-symbols:monitor-weight-loss-outline",
	});
}

export default Component;
