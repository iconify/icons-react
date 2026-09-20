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
		"content": `<style>.due_v2swe {
  d: path("M8 4h8v5c0 3 -1.5 5 -4 5s-4 -2 -4 -5Z");
}

.l1jjkky7x {
  d: path("M8 18h8");
}

.mx_vblbbc {
  fill: currentColor;
  d: path("M8 4h8v5c0 3 -1.5 5 -4 5s-4 -2 -4 -5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w5i79a2na {
  d: path("M12 14v4");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="s0phu2bbs"><path class="mx_vblbbc"/><path class="due_v2swe"/><path class="w5i79a2na"/><path class="l1jjkky7x"/><path class="xslfg2evh"/></g>`,
		"fallback": "iconmind:tournament-duotone-bold",
	});
}

export default Component;
