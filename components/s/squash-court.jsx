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
		"content": `<style>.pc70ambol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 2.5h12.5A1.75 1.75 0 0 1 20 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75H5.75A1.75 1.75 0 0 1 4 19.75V4.25A1.75 1.75 0 0 1 5.75 2.5M4 13h16m-8 0v8.5");
}
</style><path class="pc70ambol"/>`,
		"fallback": "uix:squash-court",
	});
}

export default Component;
