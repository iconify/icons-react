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
		"content": `<style>.v0_ay18uq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14a2 2 0 0 1 2 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 7h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 7h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 7v3m0 4v3m12-2v6m-3-3h6");
}
</style><path class="v0_ay18uq"/>`,
		"fallback": "uix:sequence-enroll",
	});
}

export default Component;
