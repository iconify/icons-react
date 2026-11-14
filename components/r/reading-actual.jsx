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
		"content": `<style>.k_2h91g8y {
  d: path("M6 19a8.5 8.5 0 1 1 12 0m-6-6l3.5-3.5");
}

.pmz62zbci {
  d: path("M13 9.5h2.5V12ZM12 13h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k_2h91g8y"/><path class="pmz62zbci"/></g>`,
		"fallback": "uix-sharp:reading-actual",
	});
}

export default Component;
