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
		"content": `<style>.l-33n-bfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11h18.5v3H2.75zm1.75 3h3v7h-3v-1.25Zm12 0h3v7h-3v-1.25Zm-12-6.75h9V11h-9z");
}
</style><path class="l-33n-bfl"/>`,
		"fallback": "iconoven:takht-sharp",
	});
}

export default Component;
