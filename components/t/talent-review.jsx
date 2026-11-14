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
		"content": `<style>.g91mfacmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.016 2.5h1.968a1.5 1.5 0 0 1 1.393.943l.123.307A.91.91 0 0 1 13.654 5h-3.308A.91.91 0 0 1 9.5 3.75l.123-.307a1.5 1.5 0 0 1 1.393-.943M9 7L4 21M15 7l5 14M9.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M8.5 21c0-2.75 1.5-4 3.5-4s3.5 1.25 3.5 4Z");
}
</style><path class="g91mfacmk"/>`,
		"fallback": "uix:talent-review",
	});
}

export default Component;
