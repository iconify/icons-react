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
		"content": `<style>.yzl3r_bbv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 3.5v16m-6-13h12m-14.5 6l2.5-6l2.5 6a2.5 2.5 0 0 1-5 0m12.138.82q-.138-.398-.138-.82l2.5-6l2.5 6q0 .191-.029.379M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}
</style><path class="yzl3r_bbv"/>`,
		"fallback": "uix:legal-search-engine",
	});
}

export default Component;
