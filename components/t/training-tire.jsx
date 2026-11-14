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
		"content": `<style>.dpzllgllh {
  d: path("M7.5 9.5a4.5 2 0 1 0 9 0a4.5 2 0 1 0-9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kr4fvryln {
  d: path("M3 9.5V14c0 2.5 4 4.5 9 4.5s9-2 9-4.5V9.5");
}

.q_3sk0b3c {
  d: path("M3 9.5a9 4.5 0 1 0 18 0a9 4.5 0 1 0-18 0");
}
</style><g class="hntgybcog"><path class="q_3sk0b3c"/><path class="kr4fvryln"/><path class="dpzllgllh"/></g>`,
		"fallback": "uix:training-tire",
	});
}

export default Component;
