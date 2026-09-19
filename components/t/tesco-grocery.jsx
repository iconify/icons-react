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
		"content": `<style>.aso1-xsoo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.306 41.011H9.694L5.5 19.297h37zM32.074 6.989l-8.78 12.308M24 34.112v-7.917m6.99 7.917v-7.917m-14.071 7.917v-7.917");
}
</style><path class="aso1-xsoo"/>`,
		"fallback": "arcticons:tesco-grocery",
	});
}

export default Component;
