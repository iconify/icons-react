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
		"content": `<style>.g2wj9jbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4");
}

.i2kfsikth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.438 26.2v3.653c0 1.196.97 2.165 2.165 2.165h6.935c1.195 0 2.165-.97 2.165-2.165V17.327H34.1c1.189 0 2.152.963 2.152 2.152v2.816a2.15 2.15 0 0 1-2.152 2.152h-3.64l5.978 7.571");
}
</style><path class="i2kfsikth"/><path class="g2wj9jbhp"/>`,
		"fallback": "arcticons:jr",
	});
}

export default Component;
