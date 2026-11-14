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
		"content": `<style>.qarsfzbri {
  d: path("M2.5 19.5h2v-13a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v13h2m-13.75-7h8.5");
}

.qcl8h8beo {
  d: path("m12.75 9l3.5 3.5l-3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qarsfzbri"/><path class="qcl8h8beo"/></g>`,
		"fallback": "uix-sharp:tab-forward",
	});
}

export default Component;
