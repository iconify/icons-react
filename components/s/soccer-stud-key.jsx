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
		"content": `<style>.jqzmylbsh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h10M8 4v11m-1.5 0h3l1.5 2.5L9.5 20h-3L5 17.5Zm8-2h6L19 17h-3Zm3 4v3.5");
}
</style><path class="jqzmylbsh"/>`,
		"fallback": "uix-sharp:soccer-stud-key",
	});
}

export default Component;
