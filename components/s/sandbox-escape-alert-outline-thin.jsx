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

.j7gva9flg {
  d: path("M16.5 19.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mpqh2s_-m {
  d: path("M3 11a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s-l_glb5y {
  d: path("M19 4.83a3.5 3.5 0 1 1 -2.96 0");
}

.s3axsdb5n {
  d: path("M17.5 14v2.5");
}
</style><g class="hntgybcog"><path class="mpqh2s_-m"/><path class="s-l_glb5y"/><path class="s3axsdb5n"/><path class="j7gva9flg"/></g>`,
		"fallback": "iconmind:sandbox-escape-alert-outline-thin",
	});
}

export default Component;
