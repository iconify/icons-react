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
		"content": `<style>.vki55wbfn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v4H3Zm0 7h12v4H3Zm0 7h9v4H3ZM6 7v3m0 4v3m12-2v6m-3-3h6");
}
</style><path class="vki55wbfn"/>`,
		"fallback": "uix-sharp:sequence-enroll",
	});
}

export default Component;
