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
		"content": `<style>.jaqt1vbau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19M6 4h8v3.5H6Zm4 6.25h8v3.5h-8Zm3.5 6.25h8V20h-8Z");
}
</style><path class="jaqt1vbau"/>`,
		"fallback": "uix-sharp:network-waterfall",
	});
}

export default Component;
