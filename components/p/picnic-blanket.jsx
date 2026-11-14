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
		"content": `<style>.p_c3def8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9.5a5.5 5.5 0 0 1 11 0M3 9.5h18v3H3Zm1.5 3l1.5 8h12l1.5-8m-14.25 4h13.5");
}
</style><path class="p_c3def8f"/>`,
		"fallback": "uix-sharp:picnic-blanket",
	});
}

export default Component;
