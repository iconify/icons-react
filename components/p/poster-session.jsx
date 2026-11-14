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
		"content": `<style>.oh_asvbxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.375 2.5h5.5A2.625 2.625 0 0 1 21.5 5.125v6.75a2.625 2.625 0 0 1-2.625 2.625h-5.5a2.625 2.625 0 0 1-2.625-2.625v-6.75A2.625 2.625 0 0 1 13.375 2.5M16 14.5v7M13.5 6.25h5.25m-5.25 4h3M3 12.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-.5 9c0-2.5 1.25-3.75 3-3.75s3 1.25 3 3.75");
}
</style><path class="oh_asvbxg"/>`,
		"fallback": "uix:poster-session",
	});
}

export default Component;
