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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.peiq2hfxm {
  cx: 12px;
  cy: 12px;
  r: 1.75px;
}

.z5odecc5h {
  d: path("M12 6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m1.6 4.4l2.54-2.54M10.4 10.4L7.86 7.86m2.54 5.74l-2.54 2.54m5.74-2.54l2.54 2.54");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="z5odecc5h"/><circle class="peiq2hfxm"/></g>`,
		"fallback": "iconoven:tire",
	});
}

export default Component;
