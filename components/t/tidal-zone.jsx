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
		"content": `<style>.g7yqj018p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6C4 4 5.75 4 7.25 6S10.5 8 12 6s3.25-2 4.75 0S20 8 21.5 6m-19 6c1.5-2 3.25-2 4.75 0s3.25 2 4.75 0s3.25-2 4.75 0s3.25 2 4.75 0m-19 8l19-3");
}
</style><path class="g7yqj018p"/>`,
		"fallback": "uix:tidal-zone",
	});
}

export default Component;
