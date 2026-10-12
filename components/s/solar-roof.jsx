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

.jwy7nkbld {
  d: path("m13.94 6.31l4.12 3.85q.44.41.85-.03l1.23-1.31q.41-.44-.03-.85l-4.12-3.85q-.44-.41-.85.03l-1.23 1.31q-.41.44.03.85M16 8.23l2.05-2.19M10 21.25v-3.5a2 2 0 0 1 4 0v3.5");
}

.vj_bnrfkl {
  d: path("M4.5 19.75V13q0-1.5 1.1-2.52l5.3-4.96q1.1-1.02 2.2 0l5.3 4.96q1.1 1.02 1.1 2.52v6.75q0 1.5-1.5 1.5H6q-1.5 0-1.5-1.5");
}
</style><g class="hntgybcog"><path class="vj_bnrfkl"/><path class="jwy7nkbld"/></g>`,
		"fallback": "iconoven:solar-roof",
	});
}

export default Component;
