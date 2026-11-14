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
		"content": `<style>.rdl5olbbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.323 4.788l3.889 3.889a1.75 1.75 0 0 1 0 2.475l-1.06 1.06a1.75 1.75 0 0 1-2.475 0L9.788 8.323a1.75 1.75 0 0 1 0-2.475l1.06-1.06a1.75 1.75 0 0 1 2.475 0M11.75 10.25L4.5 17.5m10 .5h5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="rdl5olbbp"/>`,
		"fallback": "uix:labor-law",
	});
}

export default Component;
