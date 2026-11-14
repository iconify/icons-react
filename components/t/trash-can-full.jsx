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
		"content": `<style>.y9pfcjabd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10.5L4.75 21h9.5L16 10.5Zm1 0c.5-4 3.5-5 5.5-3.5c1.5-3 5-2 5.5 3.5m4.565-1.669l2.954.521l-2.084 11.817l-2.954-.521Z");
}
</style><path class="y9pfcjabd"/>`,
		"fallback": "uix-sharp:trash-can-full",
	});
}

export default Component;
