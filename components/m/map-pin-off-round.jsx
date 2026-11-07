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
		"content": `<style>.b391p3bvt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.036 16.036C15.612 18.186 13.654 19.897 12 21c-3-2-7-6-7-11c0-1.678.59-3.219 1.575-4.425m3.652-2.348A7 7 0 0 1 19 10c0 .624-.062 1.232-.177 1.823M3 2l19 19");
}
</style><path class="b391p3bvt"/>`,
		"fallback": "coolicons:map-pin-off-round",
	});
}

export default Component;
