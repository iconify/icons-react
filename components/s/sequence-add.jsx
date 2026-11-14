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
		"content": `<style>.nb456eb_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 2.5h5A1.75 1.75 0 0 1 12 4.25v.5a1.75 1.75 0 0 1-1.75 1.75h-5A1.75 1.75 0 0 1 3.5 4.75v-.5A1.75 1.75 0 0 1 5.25 2.5m0 7.5h5A1.75 1.75 0 0 1 12 11.75v.5A1.75 1.75 0 0 1 10.25 14h-5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 5.25 10m0 7.5h5A1.75 1.75 0 0 1 12 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-5a1.75 1.75 0 0 1-1.75-1.75v-.5a1.75 1.75 0 0 1 1.75-1.75m2.5-11V10m0 4v3.5M18 15v6m-3-3h6");
}
</style><path class="nb456eb_k"/>`,
		"fallback": "uix:sequence-add",
	});
}

export default Component;
