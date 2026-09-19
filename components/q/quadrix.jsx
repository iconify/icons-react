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
		"content": `<style>.j_v_yxd3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.39 14.39h19.22v19.22H14.39z");
}

.zck9prbfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.74 44.723c-3.532-.894-7.552-2.257-10.07-2.257l-24.12-.006a5 5 0 0 1-4.998-5V10.535a5 5 0 0 1 5-5h26.55a5.36 5.36 0 0 1 5.375 5.374l.025 24.292c0 2.412 1.317 6.206 2.238 9.522");
}
</style><path class="j_v_yxd3d"/><path class="zck9prbfl"/>`,
		"fallback": "arcticons:quadrix",
	});
}

export default Component;
