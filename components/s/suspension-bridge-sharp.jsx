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
		"content": `<style>.cets78dop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 14.5h18.5v2.25H2.75zM7 6.25v13.5m10-13.5v13.5M9.5 9.1v5.4m5-5.4v5.4M2.75 12.75Q5 10 7 6.75q5 6.25 10 0q2 3.25 4.25 6");
}
</style><path class="cets78dop"/>`,
		"fallback": "iconoven:suspension-bridge-sharp",
	});
}

export default Component;
