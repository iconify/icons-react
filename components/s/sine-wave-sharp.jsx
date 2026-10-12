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
		"content": `<style>.gjuwmkpfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12C5.06 3.5 9.69 3.5 12 12s6.94 8.5 9.25 0");
}
</style><path class="gjuwmkpfx"/>`,
		"fallback": "iconoven:sine-wave-sharp",
	});
}

export default Component;
