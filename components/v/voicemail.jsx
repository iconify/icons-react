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
		"content": `<style>.mqyohyboi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m10.5 0a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5m-10.5 6.5h10.5");
}
</style><path class="mqyohyboi"/>`,
		"fallback": "iconoven:voicemail",
	});
}

export default Component;
