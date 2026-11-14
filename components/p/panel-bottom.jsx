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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x41tdd6rb {
  d: path("m9 7.25l3 3l3-3");
}

.z7z8npbvl {
  d: path("M2.5 3.5h19v17h-19Zm0 10.5h19");
}
</style><g class="ulnmmdpxh"><path class="z7z8npbvl"/><path class="x41tdd6rb"/></g>`,
		"fallback": "uix-sharp:panel-bottom",
	});
}

export default Component;
