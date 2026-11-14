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
		"content": `<style>.b91xgdcbl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18h19M7 18a5 5 0 0 1 10 0M12 6v4.25M6.5 12.5l-2-2m13 2l2-2");
}
</style><path class="b91xgdcbl"/>`,
		"fallback": "uix:spring-equinox",
	});
}

export default Component;
