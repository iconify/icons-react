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
		"content": `<style>.aybt5ccic {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10c.25-3 1.75-4.5 5-5c-.25 3-1.75 4.5-5 5Z");
}

.cmwg7mb-v {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 15h.01M16 15h.01");
}

.q14onebvy {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 18.25v3m9.5-3v3");
}

.tt5diihpq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h14.5v15.5H4.75zm0 9.25h14.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="tt5diihpq"/><path class="aybt5ccic"/><path class="cmwg7mb-v"/><path class="q14onebvy"/></g>`,
		"fallback": "iconoven:public-transit-eco-sharp",
	});
}

export default Component;
