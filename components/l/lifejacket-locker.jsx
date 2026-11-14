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
		"content": `<style>.b-sbomb_q {
  d: path("M14 2.5H3v19h11v-19L20 5v14l-6 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ye8qu3m9f {
  d: path("m6 8.5l1.5-2l1 3l1-3l1.5 2v9H6Z");
}
</style><g class="ulnmmdpxh"><path class="b-sbomb_q"/><path class="ye8qu3m9f"/></g>`,
		"fallback": "uix-sharp:lifejacket-locker",
	});
}

export default Component;
