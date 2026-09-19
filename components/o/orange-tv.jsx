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
		"content": `<style>.v0xsv5b1r {
  cx: 24.036px;
  cy: 35.466px;
  r: 0.75px;
  fill: currentColor;
}

.xw8nubc0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.484 10.428h39v22.886h-39zm6.876 22.886h25.353v4.304H11.36z");
}
</style><path class="xw8nubc0w"/><circle class="v0xsv5b1r"/>`,
		"fallback": "arcticons:orange-tv",
	});
}

export default Component;
