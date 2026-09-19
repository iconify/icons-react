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
		"content": `<style>.ikbp290ep {
  cx: 28px;
  cy: 26.25px;
  r: 14.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z3ujryb3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 21.751a14.5 14.5 0 1 1 4.247 10.253m0-.001l1 3m1.96-2.461l-2.96-.538");
}
</style><circle class="ikbp290ep"/><path class="z3ujryb3l"/>`,
		"fallback": "arcticons:routinery",
	});
}

export default Component;
