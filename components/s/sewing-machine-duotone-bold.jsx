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
		"content": `<style>.a814_sbem {
  d: path("M7 12v5");
}

.brrrjkbzy {
  fill: currentColor;
  d: path("M4 7h6v5H4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.md-e9sbfv {
  d: path("M10 12h6q3 0 3 6");
}

.ne5jxubfx {
  d: path("M4 7h6v5H4Z");
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
</style><g class="s0phu2bbs"><path class="brrrjkbzy"/><path class="xyj-l9cjp"/><path class="md-e9sbfv"/><path class="ne5jxubfx"/><path class="a814_sbem"/></g>`,
		"fallback": "iconmind:sewing-machine-duotone-bold",
	});
}

export default Component;
