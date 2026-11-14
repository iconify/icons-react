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
		"content": `<style>.c6bmv3q-h {
  d: path("M2.5 12h19");
}

.hsj_fobob {
  d: path("M3 3h8v4.25H3Zm10 13.75h8V21h-8Z");
}

.jlotzgbzv {
  fill: currentColor;
  d: path("M5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c6bmv3q-h"/><path class="jlotzgbzv"/><path class="hsj_fobob"/></g>`,
		"fallback": "uix-sharp:timeline",
	});
}

export default Component;
