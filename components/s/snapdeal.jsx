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
		"content": `<style>.ad-js6b2z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.953 7.773l9.76 17.106H42.5L30.567 41.336H13.856L5.5 27.155z");
}

.az8alebap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.612 6.664H33.29l9.164 15.552l-10.577-.028l-3.84-6.517H20.92z");
}
</style><path class="az8alebap"/><path class="ad-js6b2z"/>`,
		"fallback": "arcticons:snapdeal",
	});
}

export default Component;
