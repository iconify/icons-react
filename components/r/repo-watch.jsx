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
		"content": `<style>.as8mq244c {
  d: path("m7.49 4.164l10.02 2.672A2.62 2.62 0 0 1 19.375 10a2.537 2.537 0 0 1-3.115 1.836L6.24 9.164A2.62 2.62 0 0 1 4.375 6A2.537 2.537 0 0 1 7.49 4.164");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i8_i6pbxv {
  fill: currentColor;
  d: path("M14.25 9a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.v-l-oli1j {
  d: path("M4 12.5v8M4 16h7.25v-5.5");
}
</style><g class="hntgybcog"><path class="as8mq244c"/><path class="i8_i6pbxv"/><path class="v-l-oli1j"/></g>`,
		"fallback": "uix:repo-watch",
	});
}

export default Component;
