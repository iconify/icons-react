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
		"content": `<style>.pvi8foxke {
  d: path("M4.5 2.5h15v19h-15Zm3.5 4h8M8 10h5.5");
}

.r0xl7acoe {
  fill: currentColor;
  d: path("M7.25 13.5h9.5v5.25h-9.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pvi8foxke"/><path class="r0xl7acoe"/></g>`,
		"fallback": "uix-sharp:liabilities-column",
	});
}

export default Component;
