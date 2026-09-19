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
		"content": `<style>.q-li_7b2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.734 5.5c-8.135 20.897-.572 30.312 1.638 34.312");
}

.y1iet_b5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.3 23.89c-6.878 18.127-10.06 18.508-13.77 15.367c-2.34-1.983-.595-5.58 2.86-8.575c4.215-3.657 11.845-4.963 15.304-3.942c11.595 3.423 2.885 12.904-.203 15.76");
}

.z0g-yorqn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.688 15.842c4.333-.466 9.369-1.717 14.125-4.197");
}
</style><path class="z0g-yorqn"/><path class="q-li_7b2l"/><path class="y1iet_b5k"/>`,
		"fallback": "arcticons:jisho",
	});
}

export default Component;
