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
		"content": `<style>.cuxr_fxyo {
  d: path("M18 21.5v-3.75c-2.75 0-3.5-1.75-3.5-3.25c2.5 0 3.5 1.5 3.5 3.25C18 15.5 19.5 14 21.5 14c0 2-1.5 3.5-3.5 3.75");
}

.jc2od-bco {
  d: path("M13.1 18.5H2.5v-15h15v8.7M2.5 8h15M7 2v3m6-3v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jc2od-bco"/><path class="cuxr_fxyo"/></g>`,
		"fallback": "uix-sharp:seed-calendar",
	});
}

export default Component;
