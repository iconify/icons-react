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
		"content": `<style>.euyb6jbck {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19L7 5l4.5 14m-7.25-4.5h5.5m3.75 1a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m7-4V19");
}
</style><path class="euyb6jbck"/>`,
		"fallback": "uix:text-case",
	});
}

export default Component;
