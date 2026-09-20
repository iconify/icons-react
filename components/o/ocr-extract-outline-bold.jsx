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
		"content": `<style>.jjyy0-8nc {
  d: path("M7 12.5h7");
}

.o72p0hsyz {
  d: path("M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h4");
}

.r182r524c {
  d: path("M7 9h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uto0n9pso {
  d: path("M7 16h10");
}
</style><g class="s0phu2bbs"><path class="o72p0hsyz"/><path class="r182r524c"/><path class="jjyy0-8nc"/><path class="uto0n9pso"/></g>`,
		"fallback": "iconmind:ocr-extract-outline-bold",
	});
}

export default Component;
