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
		"content": `<style>.hp2ll8bzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.926 22.685l-2.467 5.137a.983.983 0 0 0 .883 1.409h17.666c1.431 0 2.116.56 2.116 2.181c0 5.306-4.454 10.97-7.376 10.97c-2.519 0-4.776-.746-7.255-2.12M5.5 22.441h37M11.279 5.618q12.721.58 25.442 0a29.4 29.4 0 0 0 0 11.569a279 279 0 0 0-25.442 0a29.3 29.3 0 0 0 0-11.57");
}
</style><path class="hp2ll8bzh"/>`,
		"fallback": "arcticons:numbers-es-ap",
	});
}

export default Component;
