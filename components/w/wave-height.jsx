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
		"content": `<style>.zd9qmdbmn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20c3.5 0 4-12 9-12c3 0 4 3 2.5 4.5M19.5 3v18m-2-18h4m-4 18h4m-4-13h4");
}
</style><path class="zd9qmdbmn"/>`,
		"fallback": "uix-sharp:wave-height",
	});
}

export default Component;
