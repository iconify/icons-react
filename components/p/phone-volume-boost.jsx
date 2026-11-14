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
		"content": `<style>.jvbz8zi2l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h8v18h-8Zm3 15h2m5.652-8.652a3.75 3.75 0 0 1 0 5.304m2.71-7.152a7 7 0 0 1 0 9m3.034-10.379a10.25 10.25 0 0 1 0 11.758");
}
</style><path class="jvbz8zi2l"/>`,
		"fallback": "uix-sharp:phone-volume-boost",
	});
}

export default Component;
