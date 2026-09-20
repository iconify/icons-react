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
		"content": `<style>.cmwdgpbrv {
  d: path("M2 17.5h20");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jjxl5r6ig {
  d: path("M10 11.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ttpxlcc5b {
  d: path("M12 3v3.5");
}

.wfmdw-bov {
  d: path("M9.5 4 12 6.5 14.5 4");
}
</style><g class="hntgybcog"><path class="ttpxlcc5b"/><path class="wfmdw-bov"/><path class="jjxl5r6ig"/><path class="cmwdgpbrv"/></g>`,
		"fallback": "iconmind:scheduler-k8s-outline-thin",
	});
}

export default Component;
