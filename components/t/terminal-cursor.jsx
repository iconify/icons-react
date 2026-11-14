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
		"content": `<style>.dlo7i-0hr {
  fill: currentColor;
  d: path("M14.25 9.5za1.5 1.5 0 0 1 1.5 1.5v2.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V11a1.5 1.5 0 0 1 1.5-1.5");
}

.g-brwyb-v {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 16.125v-8.25A4.375 4.375 0 0 1 6.875 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vq_z6bcur {
  d: path("m7 9l3 3l-3 3");
}
</style><g class="hntgybcog"><path class="g-brwyb-v"/><path class="vq_z6bcur"/><path class="dlo7i-0hr"/></g>`,
		"fallback": "uix:terminal-cursor",
	});
}

export default Component;
