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
		"content": `<style>.gfzawac2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 6.5h.01M8 6.5h12.5m-16 5h.01m3.49 0h12.5M14.75 18l2 2L21 15.75");
}
</style><path class="gfzawac2f"/>`,
		"fallback": "uix-sharp:ip-allowlist",
	});
}

export default Component;
