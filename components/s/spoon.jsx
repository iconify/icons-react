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
		"content": `<style>.bw7k9ncbi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.61 12.39a5.5 3.75-45 0 1 7.78-7.78a5.5 3.75-45 0 1-7.78 7.78m-.36.36L4 20");
}
</style><path class="bw7k9ncbi"/>`,
		"fallback": "iconoven:spoon",
	});
}

export default Component;
