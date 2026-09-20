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
		"content": `<style>.xtws1w5fw {
  fill: currentColor;
  d: path("M5 11V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23V6H7v5zm0 12v-2q.825 0 1.413.588T7 23zm4 0q0-1.65-1.175-2.825T5 19v-2q2.5 0 4.25 1.75T11 23zm4 0q0-3.35-2.325-5.675T5 15v-2q2.075 0 3.9.788t3.175 2.137t2.138 3.175T15 23zM7 4h10V3H7zm0 0V3z");
}
</style><path class="xtws1w5fw"/>`,
		"fallback": "material-symbols:tap-and-play-outline",
	});
}

export default Component;
