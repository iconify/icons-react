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
		"content": `<style>.n6t0_1bzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.75h9v8.5h-9zm3 2.75v3m3-3v3M12 11.25v4.25m-1.5 0h3v5.75h-3z");
}
</style><path class="n6t0_1bzc"/>`,
		"fallback": "iconoven:spatula-sharp",
	});
}

export default Component;
