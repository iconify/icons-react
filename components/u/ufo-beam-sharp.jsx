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
		"content": `<style>.t06rc_b9u {
  d: path("M9 6a3 3 0 0 1 6 0Z");
}

.t1a_m20we {
  d: path("M3.25 9a8.75 3 0 1 0 17.5 0a8.75 3 0 1 0-17.5 0Zm7.5 5.5h3.5l.58.82l3.59 5.11l.58.82H5l.58-.82l3.59-5.11l.58-.82z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t06rc_b9u"/><path class="t1a_m20we"/></g>`,
		"fallback": "iconoven:ufo-beam-sharp",
	});
}

export default Component;
