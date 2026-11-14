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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p9xtfkbex {
  d: path("M6 5.5h12A3.5 3.5 0 0 1 21.5 9v7a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V9A3.5 3.5 0 0 1 6 5.5");
}

.uk-a367rh {
  d: path("M12 12.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m3.25 0h.01M6 10.5h3.5m-3.5 4h3.5");
}
</style><g class="hntgybcog"><path class="p9xtfkbex"/><path class="uk-a367rh"/></g>`,
		"fallback": "uix:radio-dial-knob",
	});
}

export default Component;
