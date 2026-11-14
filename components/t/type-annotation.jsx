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
		"content": `<style>.qmm3lnvpl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 5h12.5v14H9ZM4.5 9h.01m-.01 6h.01M12 9h6.5m-3.25 0v6.5");
}
</style><path class="qmm3lnvpl"/>`,
		"fallback": "uix-sharp:type-annotation",
	});
}

export default Component;
