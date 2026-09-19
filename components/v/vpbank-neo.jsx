import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kh1-nfb1j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 16.417V40.25m0-23.833l8.667-8.667M24 16.417L15.333 7.75M4.5 19.667h10.833L24 28.333l8.667-8.666H43.5S27.25 40.25 25.083 40.25h-2.166C20.75 40.25 4.5 19.667 4.5 19.667");
}

.lq-m5_wgo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.333 19.667V7.75L24 16.417l8.667-8.667v11.917M24 16.417V40.25");
}
</style><path class="kh1-nfb1j"/><path class="lq-m5_wgo"/>`,
		"fallback": "arcticons:vpbank-neo",
	});
}

export default Component;
