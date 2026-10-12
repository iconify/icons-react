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
		"content": `<style>.nevl6p1vd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11.25h18.5v9H2.75zm1.5 0L15.75 3m-9.5 12h11.5m-2.25 2.5h2");
}
</style><path class="nevl6p1vd"/>`,
		"fallback": "iconoven:scanner-sharp",
	});
}

export default Component;
