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
		"content": `<style>.qrdwmtbvi {
  d: path("M9 3h6v7H9Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vrecxx6kh {
  d: path("M9 6h6");
}

.w6zihnbcy {
  d: path("M12 10v11");
}
</style><g class="s0phu2bbs"><path class="qrdwmtbvi"/><path class="w6zihnbcy"/><path class="vrecxx6kh"/></g>`,
		"fallback": "iconmind:toothbrush-outline-bold",
	});
}

export default Component;
