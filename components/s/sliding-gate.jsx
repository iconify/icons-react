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
		"content": `<style>.rbkmfrykl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5V4m19 17.5V4m-19 15h19m-16-9.75h9V19h-9ZM8 4.5h8m-2-2l2 2l-2 2");
}
</style><path class="rbkmfrykl"/>`,
		"fallback": "uix-sharp:sliding-gate",
	});
}

export default Component;
