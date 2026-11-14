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
		"content": `<style>.s85ee8-tv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.25 17.25a7.5 7.5 0 0 1-4.5 0M5 15.5a7.5 7.5 0 0 1-2.25-4m0-3A7.5 7.5 0 0 1 5 4.5m2.75-1.75a7.5 7.5 0 0 1 4.5 0M15 4.5a7.5 7.5 0 0 1 2.25 4m-5.5-.25C11.5 7.5 10.9 7 10 7c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1M10 5.75V7m0 6v1.25m7 1.25v6m3.5-6v6");
}
</style><path class="s85ee8-tv"/>`,
		"fallback": "uix:lapsed-donor",
	});
}

export default Component;
