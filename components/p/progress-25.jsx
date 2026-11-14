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
		"content": `<style>.o078d91rq {
  fill: currentColor;
  d: path("M7.25 9H3.5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3.75Z");
}

.qu81l_bup {
  d: path("M2.5 9h19v6h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qu81l_bup"/><path class="o078d91rq"/></g>`,
		"fallback": "uix-sharp:progress-25",
	});
}

export default Component;
