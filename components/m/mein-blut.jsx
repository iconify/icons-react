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
		"content": `<style>.yato9fbad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.013 7.804V4.5m-.668 3.312q-2.236.052-2.237 2.272h-5.765q-3.946 0-3.946 3.72v21.234c.157 4.04 3 6.737 9.616 6.771q0 1.656 1.318 1.656l3.694.035q1.439 0 1.439-1.786c6.139 0 8.983-2.696 9.139-6.737V13.743q0-3.728-3.937-3.728H26.9q0-2.211-2.09-2.211z");
}

.zojwdhbrc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.447 15.286q-4.196 2.202-8.558.425q-9.772-5.272-15.997-2.619m5.618 6.686h12.98v14.73H17.51zm3.81 12.693h5.36m-6.313-1.889h7.266M24 22.066v6.444m3.222-3.222h-6.444");
}
</style><path class="yato9fbad"/><path class="zojwdhbrc"/>`,
		"fallback": "arcticons:mein-blut",
	});
}

export default Component;
