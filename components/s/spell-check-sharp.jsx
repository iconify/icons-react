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
		"content": `<style>.w7w1jtpee {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 14L7.5 3.75L11.75 14m-6.9-3.75h5.3m.6 6.25l3 3L20.5 12");
}
</style><path class="w7w1jtpee"/>`,
		"fallback": "iconoven:spell-check-sharp",
	});
}

export default Component;
