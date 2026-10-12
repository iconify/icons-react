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

.ujkw5nbvm {
  d: path("m3.92 9.31l6.91-5.62q1.17-.94 2.34 0l6.91 5.62q1.17.94 1.17 2.44v8q0 1.5-1.5 1.5H4.25q-1.5 0-1.5-1.5v-8q0-1.5 1.17-2.44");
}

.yaok5yb_f {
  d: path("m12 9l3.75 1.35v3c0 2.4-1.5 4.1-3.75 5.15c-2.25-1.05-3.75-2.75-3.75-5.15v-3Z");
}
</style><g class="hntgybcog"><path class="ujkw5nbvm"/><path class="yaok5yb_f"/></g>`,
		"fallback": "iconoven:safe-room",
	});
}

export default Component;
