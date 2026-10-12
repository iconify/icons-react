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
		"content": `<style>.hyj4u6drp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 21.25c3.5-4.5 5.25-10.75 5.75-16.5h3c.5 5.75 2.25 12 5.75 16.5m-10 0a2.75 2.75 0 0 1 5.5 0m-8.25-5.5h11M8.75 10.5h6.5M12 4.75v-2");
}
</style><path class="hyj4u6drp"/>`,
		"fallback": "iconoven:lattice-tower-sharp",
	});
}

export default Component;
