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
		"content": `<style>.e8hdfoncf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 15h.01");
}

.ejr619pnc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.36 12l-.36-.36l-1.06-1.06l-1.06 1.06l-4.24 4.24l-1.06 1.06L8.64 18l.36.36l1.06 1.06l1.06-1.06l4.24-4.24l1.06-1.06z");
}

.j7es-0imz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.25h18.5v17H2.75zm4.75-1.5v3m9-3v3M2.75 9h18.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="j7es-0imz"/><path class="ejr619pnc"/><path class="e8hdfoncf"/></g>`,
		"fallback": "iconoven:security-patch-tuesday-sharp",
	});
}

export default Component;
