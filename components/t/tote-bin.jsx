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
		"content": `<style>.iee3p_blp {
  d: path("M3.5 8h17L19 20H5Zm0 0L6 5h12l2.5 3");
}

.p3e7cccoi {
  d: path("M9 11h6v2.5H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iee3p_blp"/><path class="p3e7cccoi"/></g>`,
		"fallback": "uix-sharp:tote-bin",
	});
}

export default Component;
