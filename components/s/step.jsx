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
		"content": `<style>.hels24b_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 32.128l6.915-11.585L24 27.458l-6.915 11.585zm6.915-11.586L19.33 8.957l11.585 6.915L24 27.457z");
}

.mrkqhkbsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 27.457l6.915-11.585L42.5 22.787l-6.915 11.585z");
}
</style><path class="hels24b_z"/><path class="mrkqhkbsu"/>`,
		"fallback": "arcticons:step",
	});
}

export default Component;
