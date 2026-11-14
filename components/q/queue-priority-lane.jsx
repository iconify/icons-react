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
		"content": `<style>.tnf7atbjq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h13.5L21 7.75l-4.5 3.75H3Zm0 11.5h18M3 20h18");
}
</style><path class="tnf7atbjq"/>`,
		"fallback": "uix-sharp:queue-priority-lane",
	});
}

export default Component;
