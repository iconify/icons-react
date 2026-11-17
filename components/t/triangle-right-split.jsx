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
		"content": `<style>.qow38acpc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20.089 20.153C20.651 19.608 21 18.845 21 18V4.503C21 3.167 19.384 2.497 18.439 3.442L10.941 10.941L3.442 18.439C2.497 19.384 3.167 21 4.503 21H18C18.812 21 19.549 20.677 20.089 20.153ZM10.941 10.941L20.089 20.153");
}
</style><path class="qow38acpc"/>`,
		"fallback": "keyline-icons:triangle-right-split",
	});
}

export default Component;
