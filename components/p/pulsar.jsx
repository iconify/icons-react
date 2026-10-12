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

.rzyzgqcqn {
  cx: 12px;
  cy: 12px;
  r: 2.25px;
}

.u9zm1wb6v {
  d: path("m15.41 3.02l-.79 4.43l3.45-2.89M8.59 20.98l.79-4.43l-3.45 2.89m12.96-8.66A7 7 0 0 1 12 19");
}
</style><g class="hntgybcog"><circle class="rzyzgqcqn"/><path class="u9zm1wb6v"/></g>`,
		"fallback": "iconoven:pulsar",
	});
}

export default Component;
