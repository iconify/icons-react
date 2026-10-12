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

.lf_mttb8i {
  d: path("M8.25 18.25h7.5");
}

.mn41dg4yb {
  d: path("M5.25 9.5L12 3.75l6.75 5.75v9.75a2 2 0 0 1-2 2h-9.5a2 2 0 0 1-2-2Z");
}

.xufr8n3ha {
  width: 6px;
  height: 4.25px;
  x: 9px;
  y: 11px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="mn41dg4yb"/><rect class="xufr8n3ha"/><path class="lf_mttb8i"/></g>`,
		"fallback": "iconoven:remote-work",
	});
}

export default Component;
