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
		"content": `<style>.tnaqtgb2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10M8.5 3v14.5a3.5 3.5 0 0 0 7 0V3m-7 6.5h7m-7 5h7M12 18h.01");
}
</style><path class="tnaqtgb2a"/>`,
		"fallback": "uix:precipitate-tube",
	});
}

export default Component;
