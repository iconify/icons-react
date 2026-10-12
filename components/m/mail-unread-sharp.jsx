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
		"content": `<style>.iczfzybzk {
  cx: 18.25px;
  cy: 5.75px;
  r: 3px;
}

.q9srn98vl {
  d: path("m6 10.75l3.65 2.75L11 14.512l1.35-1.012L16 10.75");
}

.t0c9a54sn {
  d: path("M2.75 7.25h14.5v12H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t0c9a54sn"/><path class="q9srn98vl"/><circle class="iczfzybzk"/></g>`,
		"fallback": "iconoven:mail-unread-sharp",
	});
}

export default Component;
