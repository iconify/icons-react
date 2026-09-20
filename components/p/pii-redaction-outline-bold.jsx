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

.qvytntb8g {
  d: path("M7 10h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wz1gh1b4o {
  d: path("M7 15.5A2.5 2.5 0 0 1 9.5 13h5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1 -2.5 2.5h-5A2.5 2.5 0 0 1 7 15.5");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="qvytntb8g"/><path class="wz1gh1b4o"/></g>`,
		"fallback": "iconmind:pii-redaction-outline-bold",
	});
}

export default Component;
