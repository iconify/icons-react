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
		"content": `<style>.as0-cefmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.81 16.24l5.3-5.3m2.83-2.83l5.3-5.3M7.76 21.19l5.3-5.3m2.83-2.83l5.3-5.3M7.41 8.82l1.41-1.41q.71-.71 1.42 0l6.88 6.89q.71.71 0 1.42l-1.4 1.4q-.71.71-1.42 0l-6.89-6.88q-.71-.71 0-1.42m.7-.71L5.99 5.99M3.34 4.4L4.4 3.34q.53-.53 1.06 0L6.52 4.4q.53.53 0 1.06L5.46 6.52q-.53.53-1.06 0L3.34 5.46q-.53-.53 0-1.06");
}
</style><path class="as0-cefmw"/>`,
		"fallback": "iconoven:tourniquet",
	});
}

export default Component;
