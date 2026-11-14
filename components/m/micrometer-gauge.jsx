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
		"content": `<style>.blh_albhr {
  d: path("M13 5.5h8v5h-8Zm4 0v5");
}

.brzn_ippx {
  d: path("M3.5 5.5V13A5.5 5.5 0 0 0 9 18.5h6v-8M6.5 8H13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="brzn_ippx"/><path class="blh_albhr"/></g>`,
		"fallback": "uix-sharp:micrometer-gauge",
	});
}

export default Component;
