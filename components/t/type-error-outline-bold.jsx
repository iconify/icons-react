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
		"content": `<style>.hgui8bcaa {
  d: path("m17 7 2.5 2.5L17 12");
}

.lhfoj2bfk {
  d: path("M12 6v4.5");
}

.olup7y72x {
  d: path("M11 13.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.p1h-ezbbv {
  d: path("M7 7 4.5 9.5 7 12");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="p1h-ezbbv"/><path class="hgui8bcaa"/><path class="lhfoj2bfk"/><path class="olup7y72x"/></g>`,
		"fallback": "iconmind:type-error-outline-bold",
	});
}

export default Component;
