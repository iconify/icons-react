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
		"content": `<style>.ju2iipbkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3h4a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 8.75 8.5h-4A1.75 1.75 0 0 1 3 6.75v-2A1.75 1.75 0 0 1 4.75 3M3 21.5l1.25-13m6.25 13l-1.25-13m4.25 13v-13h8v13m-8-7.5h8m-4-5.5V14");
}
</style><path class="ju2iipbkh"/>`,
		"fallback": "uix:volleyball-referee-stand",
	});
}

export default Component;
