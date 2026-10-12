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
		"content": `<style>.ei8jwacgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 9V2.75M14.75 9V2.75M10.25 9h4.5l.73.68l5.04 4.64l.73.68H2.75l.73-.68l5.04-4.64l.73-.68zM7 18.25l-1 2.5m6-2.5V21m5-2.75l1 2.5");
}
</style><path class="ei8jwacgs"/>`,
		"fallback": "iconoven:range-hood-sharp",
	});
}

export default Component;
