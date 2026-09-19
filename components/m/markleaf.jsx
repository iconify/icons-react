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
		"content": `<style>.ec_qi7bee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.023 3.5c.757-.003 10.125 4.519 12.982 15.182c1.963 7.33.39 15.64-.765 17.698s-5.06 8.12-12.216 8.12s-11.723-6.705-12.558-8.713s-2.549-10.48-.256-17.105C14.525 9.104 23.266 3.503 24.023 3.5m.001 8.644v25.129m-6.097-12.531h12.195m-12.164-6.06h12.13");
}
</style><path class="ec_qi7bee"/>`,
		"fallback": "arcticons:markleaf",
	});
}

export default Component;
