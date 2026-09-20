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
		"content": `<style>.apfyn1cpk {
  fill: currentColor;
  d: path("M13.5 3H17a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V6a3 3 0 0 1 3 -3h3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jd-uqebzu {
  d: path("M13.5 3H17a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V6a3 3 0 0 1 3 -3h3.5");
}

.q6q805_az {
  d: path("M12 3v7l2.5 -2.5L17 10V3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wuvisubmw {
  d: path("M8 3v18");
}
</style><g class="s0phu2bbs"><path class="apfyn1cpk"/><path class="jd-uqebzu"/><path class="wuvisubmw"/><path class="q6q805_az"/></g>`,
		"fallback": "iconmind:repository-duotone-bold",
	});
}

export default Component;
