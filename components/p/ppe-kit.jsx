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
		"content": `<style>.bcxls_r1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12v7.5c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V12Zm0 0l1.75-2.5M21 12l-1.75-2.5M7.5 3h9v5.5h-9Zm1 2.75h7M7.5 4c-2 0-2 3.5 0 3.5m9-3.5c2 0 2 3.5 0 3.5m-4.5 7V19m-2.25-2.25h4.5");
}
</style><path class="bcxls_r1s"/>`,
		"fallback": "uix-sharp:ppe-kit",
	});
}

export default Component;
