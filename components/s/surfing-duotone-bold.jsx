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
		"content": `<style>.f3mcq1ban {
  d: path("M12 3c3 3 4 8 3 12H9c-1 -4 0 -9 3 -12");
}

.p3m_o3bwf {
  fill: currentColor;
  d: path("M12 3c3 3 4 8 3 12H9c-1 -4 0 -9 3 -12");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pynu7yt3k {
  d: path("M3 19c3 -2 6 2 9 0s6 2 9 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="p3m_o3bwf"/><path class="f3mcq1ban"/><path class="pynu7yt3k"/></g>`,
		"fallback": "iconmind:surfing-duotone-bold",
	});
}

export default Component;
