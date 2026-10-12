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
		"content": `<style>.mof8chbiz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12q2.31-7.995 4.62 0c2.31 7.995 3.08 5.33 4.63 0s3.08-5.33 4.62 0s3.08 5.33 4.63 0");
}
</style><path class="mof8chbiz"/>`,
		"fallback": "iconoven:radio-wave",
	});
}

export default Component;
