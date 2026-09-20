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
		"content": `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.cfgqqu1un {
  d: path("M10.5 10h4");
}

.i7fxd8ole {
  d: path("M5 10h4");
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ry39d_umh {
  d: path("M16 10h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="okud9xj_d"/><path class="i7fxd8ole"/><path class="cfgqqu1un"/><path class="ry39d_umh"/><path class="c4khiwgvb"/></g>`,
		"fallback": "iconmind:keyboard-outline-bold",
	});
}

export default Component;
