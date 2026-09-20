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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.g5wa7kbrn {
  d: path("M8 12h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pty_wsbvs {
  d: path("M8 9h8");
}

.xqeoz9oav {
  d: path("m9 17 2 2 4 -4");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="pty_wsbvs"/><path class="g5wa7kbrn"/><path class="xqeoz9oav"/></g>`,
		"fallback": "iconmind:review-outline-thin",
	});
}

export default Component;
