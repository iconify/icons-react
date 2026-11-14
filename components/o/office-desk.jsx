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
		"content": `<style>.v_4vp2nuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9h19v4.5h-19ZM5 13.5v7m14-7v7M8 4h8v5H8Z");
}
</style><path class="v_4vp2nuv"/>`,
		"fallback": "uix-sharp:office-desk",
	});
}

export default Component;
