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
		"content": `<style>.vu4ou7bpk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 15l-9.25-4.5V7L12 11.5L21.25 7v3.5Zm-4 5.75L12 15l4 5.75");
}
</style><path class="vu4ou7bpk"/>`,
		"fallback": "iconoven:quran-stand-sharp",
	});
}

export default Component;
