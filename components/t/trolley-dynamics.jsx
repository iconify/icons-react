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
		"content": `<style>.r0bu2pohv {
  d: path("M2.5 6.25H14v7H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vj3axeiwe {
  d: path("M2.75 15.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-7.25 2h19m-4.75-7.5h4.75M19.25 7.5l2.25 2.25L19.25 12");
}
</style><g class="ulnmmdpxh"><path class="r0bu2pohv"/><path class="vj3axeiwe"/></g>`,
		"fallback": "uix-sharp:trolley-dynamics",
	});
}

export default Component;
