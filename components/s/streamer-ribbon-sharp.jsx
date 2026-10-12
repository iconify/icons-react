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
		"content": `<style>.gv_ygrj_v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.25h18.5M6 3.25C4.25 5.5 7.75 6.5 6 8.75s1.75 3.25 0 5.5s1.75 3.25 0 5.5m6-16.5c-1.75 2.25 1.75 3.25 0 5.5s1.75 3.25 0 5.5s1.75 3.25 0 5.5m6-16.5c-1.75 2.25 1.75 3.25 0 5.5s1.75 3.25 0 5.5");
}
</style><path class="gv_ygrj_v"/>`,
		"fallback": "iconoven:streamer-ribbon-sharp",
	});
}

export default Component;
