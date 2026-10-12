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
		"content": `<style>.j0f5vuboa {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 12h.01m4.99 0h.01");
}

.jwk-cd49x {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 5.25h16.5v16H3.75zM8 2.75v4.5m8-4.5v4.5");
}

.oxrsgf2dh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.75 15.5l1.352 1.75h3.796l1.352-1.75");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="jwk-cd49x"/><path class="j0f5vuboa"/><path class="oxrsgf2dh"/></g>`,
		"fallback": "iconoven:mood-tracker-sharp",
	});
}

export default Component;
