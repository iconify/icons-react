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
		"content": `<style>.ayfqfi6fr {
  width: 6.5px;
  height: 5px;
  x: 14.25px;
  y: 16.25px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lhpzi8bkg {
  d: path("M11.75 21.25h-3.5a2.5 2.5 0 0 1-2.5-2.5V5.25a2.5 2.5 0 0 1 2.5-2.5h7.5a2.5 2.5 0 0 1 2.5 2.5v6.5m-7.5-6h2.5m-4 4.75h.01m2.74 0h.01m2.74 0h.01");
}

.lpkyjcbgj {
  d: path("M15.75 16.25V15a1.75 1.75 0 0 1 3.5 0v1.25");
}
</style><g class="hntgybcog"><path class="lhpzi8bkg"/><rect class="ayfqfi6fr"/><path class="lpkyjcbgj"/></g>`,
		"fallback": "iconoven:two-factor",
	});
}

export default Component;
