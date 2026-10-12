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
		"content": `<style>.esi391bqf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.5 13.75V17");
}

.ic7qnlnrp {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.5 20h.01");
}

.khounccao {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 20.25h-5.5a2.5 2.5 0 0 1-2.5-2.5v-10a2.5 2.5 0 0 1 2.5-2.5h11.5a2.5 2.5 0 0 1 2.5 2.5v4M3.75 10h16.5M8 2.75v4.5m8-4.5v4.5");
}

.lqt5w6d4w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 14h.01M12 14h.01M8 17h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="khounccao"/><path class="lqt5w6d4w"/><path class="esi391bqf"/><path class="ic7qnlnrp"/></g>`,
		"fallback": "iconoven:overdue",
	});
}

export default Component;
