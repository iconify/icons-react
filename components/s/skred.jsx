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
		"content": `<style>.wmmso3_ob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.062 26.278c6.265-.813 11.87-4.036 15.438-8.876c-4.19-5.65-11.112-9.026-18.51-9.028c-7.395.014-14.31 3.399-18.49 9.052c3.573 4.832 9.177 8.046 15.437 8.854");
}

.z5wlr6bty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 8.374a9.176 9.176 0 0 0-9.176 9.176a9.18 9.18 0 0 0 6.388 8.73l-4.345 13.346h14.265L26.787 26.28a9.18 9.18 0 0 0 6.389-8.73a9.176 9.176 0 0 0-9.177-9.176Z");
}
</style><path class="wmmso3_ob"/><path class="z5wlr6bty"/>`,
		"fallback": "arcticons:skred",
	});
}

export default Component;
