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
		"content": `<style>.ptoembcdc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.5c2.75-2 6-1.5 8 1.5L12 12.75L13.25 11c2-3 5.25-3.5 8-1.5c-2.5.25-4.5 1.5-6 3.5l-2 2.5L12 16.75l-1.25-1.25l-2-2.5l-2.351-3.135zm0 10.25C4 19.75 4 19 5.25 19s1.25.75 2.5.75S9 19 10.25 19s1.25.75 2.5.75S14 19 15.25 19s1.25.75 2.5.75S19 19 20.25 19");
}
</style><path class="ptoembcdc"/>`,
		"fallback": "iconoven:seagull-marine-sharp",
	});
}

export default Component;
