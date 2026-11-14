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
		"content": `<style>.ecmd3gboi {
  d: path("M13.539 7.771a4.5 4.5 0 0 1 2.69 2.69m0 3.078a4.5 4.5 0 0 1-2.69 2.69m-3.078 0a4.5 4.5 0 0 1-2.69-2.69m0-3.078a4.5 4.5 0 0 1 2.69-2.69");
}

.eoiz0rolg {
  d: path("m3 6l6-2.5L15 6l6-2.5V18l-6 2.5L9 18l-6 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoiz0rolg"/><path class="ecmd3gboi"/></g>`,
		"fallback": "uix-sharp:national-park-boundary",
	});
}

export default Component;
