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
		"content": `<style>.g09lsz-kr {
  d: path("M9.172 15.828a4 4 0 1 1 5.656 0M12 14.25v4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.svr8uljht {
  d: path("M15.5 2.5V6H19m-8.25 7a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.t2pi5cc4y {
  d: path("M5 2.5h10.5L19 6v15.5H5Z");
}
</style><g class="hntgybcog"><path class="t2pi5cc4y"/><path class="svr8uljht"/><path class="g09lsz-kr"/></g>`,
		"fallback": "uix:podcast-episode",
	});
}

export default Component;
