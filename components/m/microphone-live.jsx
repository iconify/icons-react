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
		"content": `<style>.er1t1bbdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5za3 3 0 0 1 3 3V11a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5.5a3 3 0 0 1 3-3M12 14v7m-3 0h6m-7.243-8.507a6 6 0 0 1 0-8.486m8.486 0a6 6 0 0 1 0 8.486M4.218 13.699a9.5 9.5 0 0 1 0-10.898m15.564 0a9.5 9.5 0 0 1 0 10.898");
}
</style><path class="er1t1bbdy"/>`,
		"fallback": "uix:microphone-live",
	});
}

export default Component;
