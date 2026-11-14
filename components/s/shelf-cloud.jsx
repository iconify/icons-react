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
		"content": `<style>.wo29iobaj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 13h12a3.5 3.5 0 0 0 0-7A5.5 5.5 0 0 0 7.75 7A3.25 3.25 0 0 0 6 13Zm1 0a2.5 2.5 0 1 0 2.25 3.75M2.5 21h19");
}
</style><path class="wo29iobaj"/>`,
		"fallback": "uix-sharp:shelf-cloud",
	});
}

export default Component;
