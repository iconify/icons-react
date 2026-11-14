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
		"content": `<style>.dajsmt56v {
  d: path("M7.5 6H10v2.5H7.5Zm5 1.25h4m-9 4H10v2.5H7.5Zm5 1.25h4m-1.25 8.25l5.5-5.5m-5.25.25h.01m4.99 5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vqxat24gq {
  d: path("M12.1 21.5H4.5v-19h15v10.1");
}
</style><g class="ulnmmdpxh"><path class="vqxat24gq"/><path class="dajsmt56v"/></g>`,
		"fallback": "uix-sharp:statement-tax-form",
	});
}

export default Component;
