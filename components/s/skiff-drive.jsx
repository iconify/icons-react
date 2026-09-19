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
		"content": `<style>.dlb_93bqh {
  fill: currentColor;
  d: path("M36.438 24.208a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0");
}

.t82g_cbhw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.5 5.5c2.77 0 5 2.23 5 5v27c0 2.77-2.23 5-5 5h-27c-2.77 0-5-2.23-5-5v-27c0-2.77 2.23-5 5-5zm-32 27.281h37M5.521 15.37H42.48M8.948 20.12v8.099m3.203-8.099v8.099m3.198-8.099v8.099m23.88-4a3.539 3.539 0 1 1-3.541-3.547a3.537 3.537 0 0 1 3.541 3.536zM18.588 20.12v8.099");
}
</style><path class="t82g_cbhw"/><path class="dlb_93bqh"/>`,
		"fallback": "arcticons:skiff-drive",
	});
}

export default Component;
