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
		"content": `<style>.rp3dqbcfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 8V5a2 2 0 0 1 4 0v3M5 8h14v3.5H5Zm1.5 5.75h11M8 19l4-3l4 3v2.5H8Z");
}
</style><path class="rp3dqbcfs"/>`,
		"fallback": "uix-sharp:mortgage-stamp-duty",
	});
}

export default Component;
