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
		"content": `<style>.eh4_3ebbt {
  d: path("M4 6.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oa7ibkb8p {
  d: path("M14.32 10a5.5 5.5 0 1 1 -4.64 0");
}

.v_i-xnbbq {
  d: path("M16 6.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.w57l-wb8f {
  d: path("M10 6.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="eh4_3ebbt"/><path class="w57l-wb8f"/><path class="v_i-xnbbq"/><path class="oa7ibkb8p"/></g>`,
		"fallback": "iconmind:task-queue-agent-outline-thin",
	});
}

export default Component;
