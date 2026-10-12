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
		"content": `<style>.aco-m9b6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h14.5v9.5H4.75zm7.25 9.5v2.5m-8.25 6.5v-6.5h16.5v6.5");
}
</style><path class="aco-m9b6j"/>`,
		"fallback": "iconoven:monitor-riser-sharp",
	});
}

export default Component;
