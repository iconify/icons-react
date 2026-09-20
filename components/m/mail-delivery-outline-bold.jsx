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
		"content": `<style>.i5oa6epzy {
  d: path("M6 3v8h12V3Z");
}

.o8od38cnm {
  d: path("M4 18h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yqiq35tbk {
  d: path("m6 3 5 5 5 -5");
}
</style><g class="s0phu2bbs"><path class="i5oa6epzy"/><path class="yqiq35tbk"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:mail-delivery-outline-bold",
	});
}

export default Component;
