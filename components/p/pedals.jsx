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
		"content": `<style>.sxpzqkbyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.172 9.612l3.913-.831l1.871 8.803l-3.912.832Zm6.916 1.957l3.913-.832l1.455 6.847l-3.912.832Zm5.149-6.358l3.912-.832l2.807 13.205l-3.912.832ZM2.5 21h19");
}
</style><path class="sxpzqkbyj"/>`,
		"fallback": "uix-sharp:pedals",
	});
}

export default Component;
