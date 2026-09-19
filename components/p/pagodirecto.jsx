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
		"content": `<style>.osb08rrfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.714 14.649V4.5l2.205 1.24l2.205-1.24V24m-19.838 9.351V43.5l-2.205-1.24l-2.205 1.24V24");
}

.u1r89jbky {
  cx: 24px;
  cy: 24px;
  r: 12.124px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="u1r89jbky"/><path class="osb08rrfe"/>`,
		"fallback": "arcticons:pagodirecto",
	});
}

export default Component;
