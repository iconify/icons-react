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
		"content": `<style>.dyovrvbtg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12h6c3.5 0 4.5-6.25 8-6.25h4.5M8.75 12c3.5 0 4.5 6.25 8 6.25h4.5M12.75 12h8.5");
}
</style><path class="dyovrvbtg"/>`,
		"fallback": "iconoven:thread-split-sharp",
	});
}

export default Component;
