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
		"content": `<style>.gps1t6biv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 33.08l5.8 9.42H41L29.6 24L24 14.92L18.19 5.5H7L18.4 24");
}

.jzch68swa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 14.92l5.8-9.42H41L29.6 24L24 33.08l-5.81 9.42H7L18.4 24");
}
</style><path class="gps1t6biv"/><path class="jzch68swa"/>`,
		"fallback": "arcticons:srxp",
	});
}

export default Component;
