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
		"content": `<style>.chwfr3btt {
  fill: currentColor;
  d: path("M13 2h-3L7 5v12h10V7");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sk9ov1b7d {
  d: path("M16 7h-3l-3 3v12h10V12");
}

.t-tlxbnvp {
  d: path("M13 2h-3L7 5v12h10V7");
}

.uw59zbbfm {
  fill: currentColor;
  d: path("M16 7h-3l-3 3v12h10V12");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="chwfr3btt"/><path class="uw59zbbfm"/><path class="t-tlxbnvp"/><path class="sk9ov1b7d"/></g>`,
		"fallback": "iconmind:mcp-resource-list-duotone-bold",
	});
}

export default Component;
