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
		"content": `<style>.qik8460ao {
  d: path("M5 21h14");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s7tma7b6z {
  fill: currentColor;
  d: path("M12 2.5 16.5 7a6.5 6.5 0 1 1 -9 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.x8a73k51x {
  d: path("M12 2.5 16.5 7a6.5 6.5 0 1 1 -9 0Z");
}
</style><g class="s0phu2bbs"><path class="s7tma7b6z"/><path class="x8a73k51x"/><path class="qik8460ao"/></g>`,
		"fallback": "iconmind:oil-change-duotone-bold",
	});
}

export default Component;
