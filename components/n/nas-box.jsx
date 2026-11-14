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
		"content": `<style>.anhvwbn2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h14v16h-14ZM6 9h4m-4 5h4m3-5h.01M13 14h.01m3.49-2h2a2.5 2.5 0 0 1 2.5 2.5v6");
}
</style><path class="anhvwbn2g"/>`,
		"fallback": "uix-sharp:nas-box",
	});
}

export default Component;
