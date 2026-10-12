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
		"content": `<style>.dp31onbkh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 4.25h16.5m-16.5-1.5v3m16.5-3v3m-14 3h11.5v12.5H6.25zm0 4.25h11.5m-11.5 4h11.5");
}
</style><path class="dp31onbkh"/>`,
		"fallback": "iconoven:max-tokens-sharp",
	});
}

export default Component;
