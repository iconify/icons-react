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
		"content": `<style>.dx3ubrb9h {
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.haspjcc0u {
  fill: currentColor;
  d: path("M9 13.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hbtmd5b0k {
  d: path("M9.5 7V2.5h5V7");
}

.iw6xucujz {
  fill: currentColor;
  d: path("M4 7.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2V19a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qy4y3cbmh {
  d: path("M9 13.5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.rnyye8dag {
  d: path("M12 13.5h2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vw_dl18nv {
  d: path("M12 10.5v3");
}
</style><g class="s0phu2bbs"><path class="iw6xucujz"/><path class="haspjcc0u"/><path class="dx3ubrb9h"/><path class="hbtmd5b0k"/><path class="qy4y3cbmh"/><path class="vw_dl18nv"/><path class="rnyye8dag"/></g>`,
		"fallback": "iconmind:test-history-duotone-bold",
	});
}

export default Component;
