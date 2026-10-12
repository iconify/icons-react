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
		"content": `<style>.pkdox_x_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.75 6.25l.85 12.2l.182 1.809L8.6 20.25h6.8l1.818.009l.182-1.809l.85-12.2Zm-2 0h16.5M9 6.25v-3h6v3m-4.75 4.5v5m3.5-5v5");
}
</style><path class="pkdox_x_z"/>`,
		"fallback": "iconoven:trash-sharp",
	});
}

export default Component;
