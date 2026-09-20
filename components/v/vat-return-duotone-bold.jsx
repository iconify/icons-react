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
		"content": `<style>.fa5_klbta {
  d: path("M13.5 17.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.o3jwr8bmt {
  d: path("m9 18 6 -6");
}

.oaf82wpzn {
  fill: currentColor;
  d: path("M13.5 17.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.oz3eccbug {
  d: path("M7 8a5 5 0 0 1 10 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v9tp15bnh {
  d: path("M8.5 12.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.vo1-lv2pt {
  d: path("M3 10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.vq4q60_me {
  fill: currentColor;
  d: path("M3 10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.wxaqw6igd {
  fill: currentColor;
  d: path("M8.5 12.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="vq4q60_me"/><path class="wxaqw6igd"/><path class="oaf82wpzn"/><path class="vo1-lv2pt"/><path class="oz3eccbug"/><path class="v9tp15bnh"/><path class="o3jwr8bmt"/><path class="fa5_klbta"/></g>`,
		"fallback": "iconmind:vat-return-duotone-bold",
	});
}

export default Component;
