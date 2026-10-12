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
		"content": `<style>.wfbyrbcah {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25h18.5v13.5H2.75zm6.25 0v-3h6v3m-7.75 0v13.5m9.5-13.5v13.5");
}
</style><path class="wfbyrbcah"/>`,
		"fallback": "iconoven:suitcase-sharp",
	});
}

export default Component;
