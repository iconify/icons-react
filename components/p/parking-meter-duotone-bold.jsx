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
		"content": `<style>.kacaq8-ee {
  d: path("M5 4a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.o2i86qb_j {
  d: path("M12 14v8");
}

.qr1iqpomq {
  d: path("M9 8h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u7judjb5c {
  fill: currentColor;
  d: path("M5 4a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uadefenvd {
  d: path("M7 22h10");
}
</style><g class="s0phu2bbs"><path class="u7judjb5c"/><path class="kacaq8-ee"/><path class="o2i86qb_j"/><path class="uadefenvd"/><path class="qr1iqpomq"/></g>`,
		"fallback": "iconmind:parking-meter-duotone-bold",
	});
}

export default Component;
