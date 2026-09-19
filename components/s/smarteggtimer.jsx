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
		"content": `<style>.e7vta_3ro {
  fill: currentColor;
  d: path("M24.8 24.3c0 .4-.3.8-.8.8s-.8-.3-.8-.8c0-.4.3-.8.8-.8s.8.4.8.8m0 4.7c0 .4-.3.8-.8.8s-.8-.3-.8-.8c0-.4.3-.8.8-.8s.8.4.8.8");
}

.jn_hc_byd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5c8.1 0 16 11.4 16 21.8c0 9.5-7.2 17.3-16 17.2h0m0-39c-8.1 0-16 11.4-16 21.8c0 9.5 7.2 17.3 16 17.2h0");
}

.rok-6lm0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11 27.7c0 1.3 1.1 2.4 2.4 2.4q0 0 0 0h0c1.3 0 2.3-1 2.3-2.3v-2.5c0-1.3-1-2.3-2.3-2.4c-1.3.1-2.4 1.1-2.4 2.4zm.6 1.5l3.5-5.4m7 3.9h-4.7l3.8-4.8V30m4.9-4.7c0-1.3 1-2.3 2.3-2.4c1.3 0 2.4 1.1 2.4 2.4c0 .6-.3 1.2-.7 1.7c-1 .8-4 3.1-4 3.1h4.7m4.5-3.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-1.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h0c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.2c1 0 1.8-.8 1.8-1.8c-.1-1-.8-1.8-1.8-1.8m-1.2 0h1.2");
}
</style><path class="jn_hc_byd"/><path class="e7vta_3ro"/><path class="rok-6lm0o"/>`,
		"fallback": "arcticons:smarteggtimer",
	});
}

export default Component;
