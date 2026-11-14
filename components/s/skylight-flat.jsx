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
		"content": `<style>.gmoi46bry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 12h13.5a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75H5.25a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 5.25 12M9.5 8.25h5a1.5 1.5 0 0 1 1.5 1.5v.75a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 10.5v-.75a1.5 1.5 0 0 1 1.5-1.5M12 2.5v2.25m-5-1L8.25 5M17 3.75L15.75 5");
}
</style><path class="gmoi46bry"/>`,
		"fallback": "uix:skylight-flat",
	});
}

export default Component;
