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
		"content": `<style>.kt_ridfzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.829 18.163l-3.147 11.959H4.5m28.442 0l2.848-11.959m-6.572 0H43.5m-16.269 5.695c-5.125 10.25-15.375 3.416-6.264-1.14");
}

.rvno_8b-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.231 30.122l-7.414-9.681q-2.266-3.417 5.706-2.278");
}
</style><path class="kt_ridfzh"/><path class="rvno_8b-t"/>`,
		"fallback": "arcticons:j-and-t-express",
	});
}

export default Component;
