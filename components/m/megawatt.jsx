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
		"content": `<style>.nr-sh6b7g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18V6l4 7l4-7v12M13 6l2 12l2.25-7l2.25 7l2-12");
}
</style><path class="nr-sh6b7g"/>`,
		"fallback": "uix-sharp:megawatt",
	});
}

export default Component;
