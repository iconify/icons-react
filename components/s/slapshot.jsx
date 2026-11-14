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
		"content": `<style>.u4xjn2vde {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.5 2.5l-7 15h-5m9.5.5a3.5 2 0 1 0 7 0a3.5 2 0 1 0-7 0Z");
}
</style><path class="u4xjn2vde"/>`,
		"fallback": "uix-sharp:slapshot",
	});
}

export default Component;
