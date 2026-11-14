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
		"content": `<style>.ncufjqx5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6h14v9h-14Zm14 2.5l4-2v8l-4-2M9 15v4m-4 0h8");
}
</style><path class="ncufjqx5i"/>`,
		"fallback": "uix-sharp:warehouse-camera",
	});
}

export default Component;
