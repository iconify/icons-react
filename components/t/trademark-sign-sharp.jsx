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
		"content": `<style>.te12uqykr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13h9m-9 5h12M12.5 4.5H16m-1.75 0v5m3 0v-5L19 6.75l1.75-2.25v5");
}
</style><path class="te12uqykr"/>`,
		"fallback": "iconoven:trademark-sign-sharp",
	});
}

export default Component;
