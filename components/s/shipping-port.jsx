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
		"content": `<style>.dddyv7_zo {
  d: path("M3.75 11.5h16.5q1 0 .53.88l-1.56 2.99q-.47.88-1.47.88H6.25q-1 0-1.47-.88l-1.56-2.99q-.47-.88.53-.88");
}

.gfwl--idx {
  d: path("M4.5 11.5V8.75A.75.75 0 0 1 5.25 8h4a.75.75 0 0 1 .75.75v2.75Zm8.5 0V7a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4.5ZM3.25 20c1.25 0 1.25-.75 2.5-.75S7 20 8.25 20s1.25-.75 2.5-.75s1.25.75 2.5.75s1.25-.75 2.5-.75s1.25.75 2.5.75s1.25-.75 2.5-.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="dddyv7_zo"/><path class="gfwl--idx"/></g>`,
		"fallback": "iconoven:shipping-port",
	});
}

export default Component;
