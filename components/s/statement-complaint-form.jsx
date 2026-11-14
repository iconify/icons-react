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
		"content": `<style>.a8a2nqh1e {
  d: path("M7.5 6H10v2.5H7.5Zm5 1.25h4m-9 4H10v2.5H7.5Zm5 1.25h2.7m2.8 2v4m0 2.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.voov4rb0z {
  d: path("M15.2 21.5H4.5v-19h15v9.2");
}
</style><g class="ulnmmdpxh"><path class="voov4rb0z"/><path class="a8a2nqh1e"/></g>`,
		"fallback": "uix-sharp:statement-complaint-form",
	});
}

export default Component;
