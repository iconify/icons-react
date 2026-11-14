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
		"content": `<style>.dp7ht2bxo {
  d: path("M15 15h3.25l3.25 3.25l-3.25 3.25L15 18.25Z");
}

.roxjdldll {
  d: path("M14.3 21.5H4v-19h15v9.7M7.5 7h8m-8 4h8m-8 4H12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="roxjdldll"/><path class="dp7ht2bxo"/></g>`,
		"fallback": "uix-sharp:keyword-extraction",
	});
}

export default Component;
