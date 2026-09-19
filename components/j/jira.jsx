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
		"content": `<style>.k5lmobclv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.972 5.5a8.736 8.736 0 0 0 8.736 8.736h2.056v2.056a8.736 8.736 0 0 0 8.736 8.736h0V5.5Z");
}

.w15enlbmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.236 14.236a8.736 8.736 0 0 0 8.736 8.736h2.056v2.056a8.736 8.736 0 0 0 8.736 8.736h0V14.236Z");
}

.x0j_vr2al {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 22.972a8.736 8.736 0 0 0 8.736 8.736h2.056v2.056a8.736 8.736 0 0 0 8.736 8.736h0V22.972Z");
}
</style><path class="x0j_vr2al"/><path class="w15enlbmr"/><path class="k5lmobclv"/>`,
		"fallback": "arcticons:jira",
	});
}

export default Component;
