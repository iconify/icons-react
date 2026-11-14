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
		"content": `<style>.e9diypbaj {
  d: path("m17.5 12l4.5 9.75h-9Zm0 3.75v2m0 2h.01");
}

.nig8nvb1k {
  d: path("M11.033 19.224L8.5 18.5l-6 2v-15l6-2l7 2l6-2v10.571M9 3.5V18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nig8nvb1k"/><path class="e9diypbaj"/></g>`,
		"fallback": "uix-sharp:map-report-issue",
	});
}

export default Component;
