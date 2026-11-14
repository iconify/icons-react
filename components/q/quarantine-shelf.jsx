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
		"content": `<style>.jy419i71c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5v19M13.8 13H2.5v-2.5h19v2M2.5 18l5-5M7 2.5h9.5v8H7Zm3.5 0v3m2.5-3v3M14.25 18a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM16 18h4");
}
</style><path class="jy419i71c"/>`,
		"fallback": "uix-sharp:quarantine-shelf",
	});
}

export default Component;
