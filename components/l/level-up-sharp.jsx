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
		"content": `<style>.sa2uoab-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.15 3.37l.49 1.17l.15.37l.4.03l1.26.1l.4.03l-.3.26l-.96.83l-.31.26l.1.39l.29 1.23l.09.39l-.34-.21l-1.08-.66l-.34-.21l-.34.21l-1.08.66l-.34.21l.09-.39l.29-1.23l.1-.39l-.31-.26l-.96-.83l-.3-.26l.4-.03l1.26-.1l.4-.03l.15-.37l.49-1.17L12 3zm-5.9 11.38l5.75-4.5l5.75 4.5m-11.5 4l5.75-4.5l5.75 4.5M5.5 21.25h13");
}
</style><path class="sa2uoab-p"/>`,
		"fallback": "iconoven:level-up-sharp",
	});
}

export default Component;
