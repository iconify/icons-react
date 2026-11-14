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
		"content": `<style>.jly3nebst {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 16.5a7.5 7.5 0 0 1 15 0Zm-2 3h19M12 9V5.5m-2 0h4");
}
</style><path class="jly3nebst"/>`,
		"fallback": "uix-sharp:reception-sign",
	});
}

export default Component;
