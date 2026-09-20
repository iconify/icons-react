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
		"content": `<style>.aej0b95ng {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.313 11.813H43.5V24a12.19 12.19 0 0 1-12.187 12.188A12.19 12.19 0 0 1 19.124 24a12.19 12.19 0 0 1 12.188-12.187");
}

.xfnmmy-sw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.688 36.188H4.5V24a12.19 12.19 0 0 1 12.188-12.187A12.19 12.19 0 0 1 28.874 24a12.19 12.19 0 0 1-12.187 12.188");
}
</style><path class="aej0b95ng"/><path class="xfnmmy-sw"/>`,
		"fallback": "arcticons:tandem",
	});
}

export default Component;
