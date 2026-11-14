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
		"content": `<style>.mu9i955nd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5c0 7.5 8 11.5 8 19m2-19c0 7.5 8 11.5 8 19M10.5 12q.75-.75 1.5 0t1.5 0");
}
</style><path class="mu9i955nd"/>`,
		"fallback": "uix-sharp:river-bend",
	});
}

export default Component;
