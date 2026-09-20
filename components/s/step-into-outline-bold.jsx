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
		"content": `<style>.ilxguy6uu {
  d: path("M12 4v10");
}

.mqnae981n {
  d: path("m9 11 3 3 3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xyj-l9cjp {
  d: path("M3 18h18");
}
</style><g class="s0phu2bbs"><path class="xyj-l9cjp"/><path class="ilxguy6uu"/><path class="mqnae981n"/></g>`,
		"fallback": "iconmind:step-into-outline-bold",
	});
}

export default Component;
