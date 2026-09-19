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
		"content": `<style>.kh00w3jny {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.087 20.284a1.29 1.29 0 0 1-1.29 1.29h0a1.29 1.29 0 0 1-1.29-1.29h0c0-.712.578-1.29 1.29-1.29h0c.712 0 1.29.578 1.29 1.29m20.171 14.628v4.055h10.215A2.03 2.03 0 0 0 42.5 36.94h0a2.03 2.03 0 0 0-2.027-2.028z");
}

.m4jdtrbvi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 6.722h37v16.904h-37zm24.758 32.246v1.378a.933.933 0 0 1-.932.932H18.674a.933.933 0 0 1-.932-.932v-6.812c0-.515.417-.932.932-.932h10.652c.515 0 .932.417.932.932v1.379m-8.285-11.287h4.055v8.976h-4.055zm-4.231 11.287v4.055H7.527A2.03 2.03 0 0 1 5.5 36.94h0c0-1.119.909-2.027 2.027-2.027z");
}
</style><path class="m4jdtrbvi"/><path class="kh00w3jny"/>`,
		"fallback": "arcticons:totalcmd-lan-windows-shares",
	});
}

export default Component;
