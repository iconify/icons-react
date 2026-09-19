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
		"content": `<style>.r0-tsyikl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.73 14.5l-14.728.012l-5.056 4.547l-.095 9.955l4.597 4.536l3.445-3.952c-5.115-1.345-4.61-9.23.136-10.528h11.084a3.017 3.017 0 0 0 .618-4.57M31.895 29.6l11.453.007a2.72 2.72 0 0 1 .214 3.948l-15.113-.025m.554-19.02l-25.41-.063l-.092 4.588l8.382.051l.033 14.444l5.001.021l-.044-14.469L24 19.06");
}
</style><path class="r0-tsyikl"/>`,
		"fallback": "arcticons:third-crisis",
	});
}

export default Component;
