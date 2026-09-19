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
		"content": `<style>.y2sq7mxmt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 7.044l6.32 10.714L24 28.472l-6.32-10.637zm0 21.43h12.333L42.5 38.956H30.167zm0 0H11.667L5.5 38.956h12.333z");
}
</style><path class="y2sq7mxmt"/>`,
		"fallback": "arcticons:mitsubishi",
	});
}

export default Component;
