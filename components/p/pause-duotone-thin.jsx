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

.o_5zgdb_v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s7eyaw7qq {
  d: path("M15 4v16");
}

.t87ohzbeq {
  d: path("M9 4v16");
}

.zgonr5jws {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="o_5zgdb_v"/><path class="zgonr5jws"/><path class="t87ohzbeq"/><path class="s7eyaw7qq"/></g>`,
		"fallback": "iconmind:pause-duotone-thin",
	});
}

export default Component;
