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
		"content": `<style>.af5e0r4wj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.19 27.24h7.779a1.011 1.011 0 0 0 .327-1.968l-7.43-2.545a1.011 1.011 0 0 1 .328-1.968h7.786m1.683.001v4.963c0 .838.68 1.518 1.518 1.518h4.301c.838 0 1.518-.68 1.518-1.518h0V20.76m12.163 0v4.963c0 .838.68 1.518 1.518 1.518h4.301c.838 0 1.518-.68 1.518-1.518V20.76m-39 0v6.48m29.972 0h-7.778a1.011 1.011 0 0 1-.328-1.968l7.43-2.545a1.011 1.011 0 0 0-.328-1.968h-7.785");
}
</style><path class="af5e0r4wj"/>`,
		"fallback": "arcticons:isuzu",
	});
}

export default Component;
