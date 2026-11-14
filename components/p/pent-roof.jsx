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
		"content": `<style>.dgwuiea8m {
  d: path("M4.5 7v13.5h15v-9.75");
}

.q-ngx-bes {
  d: path("m2.5 3.5l19 4.75v3L2.5 6.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q-ngx-bes"/><path class="dgwuiea8m"/></g>`,
		"fallback": "uix-sharp:pent-roof",
	});
}

export default Component;
