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
		"content": `<style>.lsd9mobqp {
  d: path("M15.2 21.5H4.5v-19h15v9.7");
}

.nf2xjugnh {
  d: path("M7.5 6H10v2.5H7.5Zm5 1.25h4m-9 4H10v2.5H7.5Zm5 1.25h2.7M18 15v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lsd9mobqp"/><path class="nf2xjugnh"/></g>`,
		"fallback": "uix-sharp:statement-account-opening-form",
	});
}

export default Component;
