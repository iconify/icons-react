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
		"content": `<style>.ris974d5c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5.75h13v12.5h-13zm13.86 3.99l3.78-2.23l.86-.51v10l-.86-.51l-3.78-2.23l-.86-.51v-3.5z");
}
</style><path class="ris974d5c"/>`,
		"fallback": "iconoven:video-lock-sharp",
	});
}

export default Component;
