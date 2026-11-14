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
		"content": `<style>.skysxo_4d {
  d: path("M15.2 21.5H3.5v-19h15v9.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yrbj1_p-c {
  d: path("m7 6l4 3l4-3m-8 6.5h8m-8 4h4m7-1.5v6m-3-3h6");
}
</style><g class="ulnmmdpxh"><path class="skysxo_4d"/><path class="yrbj1_p-c"/></g>`,
		"fallback": "uix-sharp:newsletter-issue-plus",
	});
}

export default Component;
