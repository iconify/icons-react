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
		"content": `<style>.g04xkmgbk {
  d: path("M12.54 7.56a6 6 0 1 1 -5.08 0");
}

.qcu95-bhb {
  d: path("M15 4h4l-4 4h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="g04xkmgbk"/><path class="qcu95-bhb"/></g>`,
		"fallback": "iconmind:sleeper-outline-bold",
	});
}

export default Component;
