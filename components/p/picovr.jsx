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
		"content": `<style>.d_-w3fb5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.5 24A21.5 21.5 0 1 1 24 2.5A21.5 21.5 0 0 1 45.5 24");
}

.nx94t6bqc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.891 28.63c-17.527.558-23.037-28.826-42.154-7.48");
}

.ovl7o4bar {
  cx: 13.813px;
  cy: 24.703px;
  r: 2.431px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="d_-w3fb5b"/><path class="nx94t6bqc"/><circle class="ovl7o4bar"/>`,
		"fallback": "arcticons:picovr",
	});
}

export default Component;
