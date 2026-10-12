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
		"content": `<style>.fq9riv86l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4m-2 0v4.5m-9.25 0h18.5v10H2.75zM6.5 14l3-3.75M10 14l1.5-1.9");
}
</style><path class="fq9riv86l"/>`,
		"fallback": "iconoven:rearview-mirror-sharp",
	});
}

export default Component;
