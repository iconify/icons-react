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
		"content": `<style>.kq_qj1i3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.137 31.113V18.969h9.088c2.561 0 4.638.56 4.638 3.055s-2.076 3.056-4.639 3.056h-9.087m7.492 0l6.746 6.033");
}

.r5fynigcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 41.179l-12.617-6.076L8.267 21.45l8.731-10.948h14.004l8.73 10.948l-3.115 13.653z");
}

.x0_qp-vix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 4.013l16.44 7.918l4.06 17.79l-11.376 14.266H14.876L3.5 29.72l4.06-17.79z");
}
</style><path class="x0_qp-vix"/><path class="r5fynigcv"/><path class="kq_qj1i3r"/>`,
		"fallback": "arcticons:regal",
	});
}

export default Component;
