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
		"content": `<style>.oxy9ir50k {
  d: path("m15 16.5l3 3l3-3");
}

.quxzo_a_a {
  d: path("M2.5 4.5h19m-19 15h19M6 4.5c0 8 12 5.5 12 15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="quxzo_a_a"/><path class="oxy9ir50k"/></g>`,
		"fallback": "uix-sharp:transfer-line",
	});
}

export default Component;
