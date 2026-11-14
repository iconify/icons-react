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
		"content": `<style>.a020bperc {
  d: path("m2.5 7l9.5 6l9.5-6m-5.25 7.75L19.5 18l-3.25 3.25");
}

.nq9olr_6y {
  d: path("M15.1 18.5H2.5v-13h19v10.6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nq9olr_6y"/><path class="a020bperc"/></g>`,
		"fallback": "uix-sharp:sequence-email-step",
	});
}

export default Component;
