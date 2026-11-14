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
		"content": `<style>.aq8oj4bac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9v3h-9Zm1 3l-4 10q7.5 1.5 15 0l-4-10m-6 10.75v5.25m5-5.25v5.25");
}
</style><path class="aq8oj4bac"/>`,
		"fallback": "uix-sharp:midi-skirt",
	});
}

export default Component;
