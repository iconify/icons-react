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
		"content": `<style>.p0skfywgv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 5h7m3.5 0h8M2.75 19h11.5M2.75 9.25h18.5v5.5H2.75zM6.25 12h7");
}
</style><path class="p0skfywgv"/>`,
		"fallback": "iconoven:syntax-highlight-sharp",
	});
}

export default Component;
