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
		"content": `<style>.a6sdxmycp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 21V3.5m-4 4l4-4l4 4M6.5 21v-3.5Q6.5 13 14 11");
}
</style><path class="a6sdxmycp"/>`,
		"fallback": "uix:merge-left",
	});
}

export default Component;
