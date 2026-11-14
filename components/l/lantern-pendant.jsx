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

.irmmqsb0p {
  d: path("m8.5 10.5l1 10h5l1-10m-3.5 3v4");
}

.r5mxibaaw {
  d: path("M12 2.5V6M9.75 8.25l1.189-1.189a1.5 1.5 0 0 1 2.122 0L14.25 8.25a1.318 1.318 0 0 1-.932 2.25h-2.636a1.318 1.318 0 0 1-.932-2.25");
}
</style><g class="hntgybcog"><path class="r5mxibaaw"/><path class="irmmqsb0p"/></g>`,
		"fallback": "uix:lantern-pendant",
	});
}

export default Component;
