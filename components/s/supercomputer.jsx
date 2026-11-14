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
		"content": `<style>.a4uk6x_ri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12v19H6Zm0 6.25h12m-12 6.5h12m-8.75-9.5h.01M9.25 12h.01m-.01 6.25h.01");
}
</style><path class="a4uk6x_ri"/>`,
		"fallback": "uix-sharp:supercomputer",
	});
}

export default Component;
