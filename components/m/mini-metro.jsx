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
		"content": `<style>.f08ezs4lq {
  cx: 23.5px;
  cy: 24px;
  r: 14.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.lw6wdebmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.5 9.5v-5m0 39v-5m6-27.7V4.5m-12 6.3V4.5m16.25 29.75L39 39.5m-10.06-2.06l5.54 5.54");
}
</style><circle class="f08ezs4lq"/><path class="lw6wdebmr"/>`,
		"fallback": "arcticons:mini-metro",
	});
}

export default Component;
