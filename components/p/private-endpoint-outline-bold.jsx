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
		"content": `<style>.kh0ioebug {
  d: path("M14 12a3 3 0 0 1 6 0");
}

.o5dbzp2st {
  d: path("m3 3 7 7");
}

.o6uigcb7l {
  d: path("M13 14a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="o5dbzp2st"/><path class="o6uigcb7l"/><path class="kh0ioebug"/></g>`,
		"fallback": "iconmind:private-endpoint-outline-bold",
	});
}

export default Component;
