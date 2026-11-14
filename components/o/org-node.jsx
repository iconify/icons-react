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
		"content": `<style>.cbq2qxbfq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.688 2.5h2.625A2.19 2.19 0 0 1 15.5 4.688v.625A2.19 2.19 0 0 1 13.313 7.5h-2.625A2.19 2.19 0 0 1 8.5 5.313v-.625A2.19 2.19 0 0 1 10.688 2.5M12 7.5V11m-6.5 4v-2.5A1.5 1.5 0 0 1 7 11h10a1.5 1.5 0 0 1 1.5 1.5V15M4.688 15h1.625A2.19 2.19 0 0 1 8.5 17.188v1.125A2.19 2.19 0 0 1 6.313 20.5H4.688A2.19 2.19 0 0 1 2.5 18.313v-1.125A2.19 2.19 0 0 1 4.688 15m13 0h1.625a2.19 2.19 0 0 1 2.187 2.188v1.125a2.19 2.19 0 0 1-2.187 2.187h-1.625a2.19 2.19 0 0 1-2.188-2.187v-1.125A2.19 2.19 0 0 1 17.688 15");
}
</style><path class="cbq2qxbfq"/>`,
		"fallback": "uix:org-node",
	});
}

export default Component;
