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
		"content": `<style>.hjc3w-8xm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.919 25.59c0 6.582-5.336 11.919-11.919 11.919s-11.919-5.337-11.919-11.92M24 37.509V43.5");
}

.pcbw2tbdk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.03 25.59a7.03 7.03 0 0 1-14.06 0V11.53a7.03 7.03 0 0 1 14.06 0z");
}
</style><path class="pcbw2tbdk"/><path class="hjc3w-8xm"/>`,
		"fallback": "arcticons:record-you",
	});
}

export default Component;
