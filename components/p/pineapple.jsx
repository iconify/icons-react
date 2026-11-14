import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fato-rbtr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9c-4 0-5.5 3.5-5.5 6.5C6.5 19 9 21 12 21s5.5-2 5.5-5.5c0-3-1.5-6.5-5.5-6.5m0 0L8.5 4.5M12 9V3m0 6l3.5-4.5M9 14l6 6m0-6l-6 6");
}
</style><path class="fato-rbtr"/>`,
		"fallback": "uix:pineapple",
	});
}

export default Component;
