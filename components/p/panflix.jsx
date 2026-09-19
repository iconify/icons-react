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
		"content": `<style>.j8icydbck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.368 33.376v-5.961a8.36 8.36 0 0 0 0-16.72h-8.452a2.58 2.58 0 0 0-2.576 2.583v9.539c0 5.778 5.22 10.559 11.028 10.559");
}

.wno220bnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.368 43.626v-10.25a14.375 14.375 0 0 0 0-28.75H11.79a4.44 4.44 0 0 0-4.44 4.442v16.401c0 9.936 9.003 18.157 19.019 18.157Z");
}
</style><path class="wno220bnk"/><path class="j8icydbck"/>`,
		"fallback": "arcticons:panflix",
	});
}

export default Component;
