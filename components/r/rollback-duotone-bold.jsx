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
		"content": `<style>.dthqm4bkd {
  fill: currentColor;
  d: path("M13.5 11H17a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3v-3a3 3 0 0 1 3 -3h3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.f4naz_w9a {
  d: path("m9 5 3 3 3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uvgrx_yvv {
  d: path("M12 3v5");
}

.zt9xgrbcr {
  d: path("M13.5 11H17a3 3 0 0 1 3 3v3a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3v-3a3 3 0 0 1 3 -3h3.5");
}
</style><g class="s0phu2bbs"><path class="dthqm4bkd"/><path class="zt9xgrbcr"/><path class="uvgrx_yvv"/><path class="f4naz_w9a"/></g>`,
		"fallback": "iconmind:rollback-duotone-bold",
	});
}

export default Component;
