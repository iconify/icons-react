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

.jzoinf48m {
  d: path("M9.75 12.25h1.5a2.25 2.25 0 0 1 2.25 2.25A1.5 1.5 0 0 1 12 16H9.75Z");
}

.nz9axgt9q {
  cx: 10.75px;
  cy: 9.5px;
  r: 1.25px;
}

.sd3w49bzs {
  d: path("M12 20.25c-.4 0-.8-.15-1.1-.45l-6.3-6.2a4.75 4.75 0 0 1 6.7-6.7l.7.7l.7-.7a4.75 4.75 0 0 1 6.7 6.7l-6.3 6.2c-.3.3-.7.45-1.1.45");
}
</style><g class="hntgybcog"><path class="sd3w49bzs"/><circle class="nz9axgt9q"/><path class="jzoinf48m"/></g>`,
		"fallback": "iconoven:maternity",
	});
}

export default Component;
