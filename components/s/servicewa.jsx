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
		"content": `<style>.d25qr6cui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.913 35.453v-26L31.993 4.5l-8.608 11.143l-12.298 4.952l1.23 8.667l3.074 8.048l-1.844 4.333l7.378 1.857l.527-1.238z");
}

.em8un5bgi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.041 27.504h-3.653m-.911 2.796l2.741-8.408l2.74 8.433m-7.484-8.433l-2.108 8.433l-2.108-8.433l-2.108 8.433l-2.108-8.433");
}
</style><path class="em8un5bgi"/><path class="d25qr6cui"/>`,
		"fallback": "arcticons:servicewa",
	});
}

export default Component;
