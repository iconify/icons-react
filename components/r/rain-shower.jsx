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
		"content": `<style>.n8klmjb0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 6.5h13.5A1.25 1.25 0 0 1 20 7.75A1.25 1.25 0 0 1 18.75 9H5.25A1.25 1.25 0 0 1 4 7.75A1.25 1.25 0 0 1 5.25 6.5M12 4v2.5M6 12v2m4-2v2m4-2v2m4-2v2M8 17.5v2m4-2v2m4-2v2");
}
</style><path class="n8klmjb0l"/>`,
		"fallback": "uix:rain-shower",
	});
}

export default Component;
