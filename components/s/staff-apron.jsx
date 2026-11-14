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
		"content": `<style>.iehj1qwas {
  d: path("M9.5 14h5v3.5h-5Zm-3-5l-3 3m14-3l3 3");
}

.qcdpe_btd {
  d: path("M6.5 9h11v10.5A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3nyslhix {
  d: path("M8 3v3a4 4 0 0 0 8 0V3");
}
</style><g class="ulnmmdpxh"><path class="z3nyslhix"/><path class="qcdpe_btd"/><path class="iehj1qwas"/></g>`,
		"fallback": "uix-sharp:staff-apron",
	});
}

export default Component;
