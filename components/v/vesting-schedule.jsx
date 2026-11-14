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
		"content": `<style>.zi_mv6bok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12V4a8 8 0 0 1 8 8Zm0-4l4 4m-3-7.25L19.25 11m.25 4h.01m-1.76 2.75h.01M15 19.5h.01M12 20h.01M9 19.5h.01m-2.76-1.75h.01M4.5 15h.01M4 12h.01m.49-3h.01m1.74-2.75h.01M9 4.5h.01");
}
</style><path class="zi_mv6bok"/>`,
		"fallback": "uix:vesting-schedule",
	});
}

export default Component;
