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
		"content": `<style>.sosoq7ilw {
  fill: currentColor;
  d: path("M5 11V1h14v22h-2V6H7v5zm0 12v-2q.825 0 1.413.588T7 23zm4 0q0-1.65-1.175-2.825T5 19v-2q2.5 0 4.25 1.75T11 23zm4 0q0-3.35-2.325-5.675T5 15v-2q2.075 0 3.9.788t3.175 2.137t2.138 3.175T15 23zM7 4h10V3H7zm0 0V3z");
}
</style><path class="sosoq7ilw"/>`,
		"fallback": "material-symbols:tap-and-play-outline-sharp",
	});
}

export default Component;
