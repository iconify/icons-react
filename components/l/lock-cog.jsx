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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u34nf7zvd {
  d: path("M8.875 10h6.25a4.375 4.375 0 0 1 4.375 4.375v2.25A4.375 4.375 0 0 1 15.125 21h-6.25A4.375 4.375 0 0 1 4.5 16.625v-2.25A4.375 4.375 0 0 1 8.875 10M8 10V7a4 4 0 0 1 8 0v3");
}

.zmb7oobsq {
  d: path("m11.454 13.103l.001-.04a.53.53 0 0 1 .53-.516h.03a.53.53 0 0 1 .53.516l.001.04a.85.85 0 0 0 .425.715a.85.85 0 0 0 .832.011l.035-.019a.53.53 0 0 1 .711.201l.016.026a.53.53 0 0 1-.183.716l-.033.021a.85.85 0 0 0-.407.726a.85.85 0 0 0 .407.726l.033.021a.53.53 0 0 1 .183.716l-.016.026a.53.53 0 0 1-.711.201l-.035-.019a.85.85 0 0 0-.832.011a.85.85 0 0 0-.425.715l-.001.04a.53.53 0 0 1-.53.516h-.03a.53.53 0 0 1-.53-.516l-.001-.04a.85.85 0 0 0-.425-.715a.85.85 0 0 0-.832-.011l-.035.019a.53.53 0 0 1-.711-.201l-.016-.026a.53.53 0 0 1 .183-.716l.033-.021a.85.85 0 0 0 .407-.726a.85.85 0 0 0-.407-.726l-.033-.021a.53.53 0 0 1-.183-.716l.016-.026a.53.53 0 0 1 .711-.201l.035.019a.85.85 0 0 0 .832-.011a.85.85 0 0 0 .425-.715");
}
</style><g class="hntgybcog"><path class="u34nf7zvd"/><path class="zmb7oobsq"/></g>`,
		"fallback": "uix:lock-cog",
	});
}

export default Component;
