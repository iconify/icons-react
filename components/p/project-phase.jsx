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
		"content": `<style>.i6hh300fo {
  d: path("M9.75 19.5v-10h4.5v10m-11.75 0h19m-4.5 0v-15h4.5v15");
}

.skk_m4f_l {
  fill: currentColor;
  d: path("M2.5 14H7v5.5H2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="skk_m4f_l"/><path class="i6hh300fo"/></g>`,
		"fallback": "uix-sharp:project-phase",
	});
}

export default Component;
