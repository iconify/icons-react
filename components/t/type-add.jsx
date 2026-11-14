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
		"content": `<style>.ovs_a1bqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5v-2h11v2m-5.5-2v15m-3 0h6m7-8.5v6m-3-3h6");
}
</style><path class="ovs_a1bqq"/>`,
		"fallback": "uix-sharp:type-add",
	});
}

export default Component;
