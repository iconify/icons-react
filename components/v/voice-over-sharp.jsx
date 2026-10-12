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
		"content": `<style>.v9xsnac0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.75h11v11H9l-3.25 3v-3h-3v-11zm1.75 4H12m-5.5 3H10m7.5-4.25L19.17 9l-1.67 2.5m2.25-7a8 8 0 0 1 0 9");
}
</style><path class="v9xsnac0x"/>`,
		"fallback": "iconoven:voice-over-sharp",
	});
}

export default Component;
