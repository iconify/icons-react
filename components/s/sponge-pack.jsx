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
		"content": `<style>.ipt-ebc3e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5h14v5h-14Zm2.5-5h14v5H5Zm2.5-5h14v5h-14Z");
}
</style><path class="ipt-ebc3e"/>`,
		"fallback": "uix-sharp:sponge-pack",
	});
}

export default Component;
