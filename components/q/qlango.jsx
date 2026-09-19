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
		"content": `<style>.lflbodbjs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24c0-10.217-8.283-18.5-18.5-18.5S5.5 13.783 5.5 24S13.783 42.5 24 42.5h18.5v-7.154h-3.91A18.4 18.4 0 0 0 42.5 24");
}

.y409j3mbp {
  cx: 24px;
  cy: 24px;
  r: 11.346px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="y409j3mbp"/><path class="lflbodbjs"/>`,
		"fallback": "arcticons:qlango",
	});
}

export default Component;
