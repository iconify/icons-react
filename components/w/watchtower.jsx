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
		"content": `<style>.c3ijrl1hb {
  d: path("m5.51 6.69l5.98-3.63q.51-.31 1.02 0l5.98 3.63Q19 7 18.4 7H5.6q-.6 0-.09-.31M7 7.75v3m10-3v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.twt2yub3p {
  d: path("M7.5 13.5L5 21.25m11.5-7.75l2.5 7.75m-8.25-7.75v7.75m2.5-7.75v7.75m-2.5-4.75h2.5m-2.5 2.5h2.5");
}

.xa96igb2c {
  width: 12.5px;
  height: 2.5px;
  x: 5.75px;
  y: 11px;
  rx: 0.5px;
}
</style><g class="hntgybcog"><path class="c3ijrl1hb"/><rect class="xa96igb2c"/><path class="twt2yub3p"/></g>`,
		"fallback": "iconoven:watchtower",
	});
}

export default Component;
