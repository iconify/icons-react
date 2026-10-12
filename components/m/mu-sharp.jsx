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
		"content": `<style>.dk46f8blc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 4.5v15.75m0-8.25a4.75 4.75 0 0 0 9.5 0m0-7.5V17h2");
}
</style><path class="dk46f8blc"/>`,
		"fallback": "iconoven:mu-sharp",
	});
}

export default Component;
