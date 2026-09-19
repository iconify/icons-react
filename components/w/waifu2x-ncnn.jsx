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
		"content": `<style>.buk6ygbui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 17.164L6.923 40.886L24 27.618l17.077 13.268z");
}

.w5i64ubmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.73 19.176l-2.845 3.618L5.5 7.114l12.808 9.65L24 11.853l5.692 4.91L42.5 7.113l-11.385 15.68l-2.846-3.618");
}
</style><path class="buk6ygbui"/><path class="w5i64ubmp"/>`,
		"fallback": "arcticons:waifu2x-ncnn",
	});
}

export default Component;
