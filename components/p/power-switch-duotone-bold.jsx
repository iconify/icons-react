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
		"content": `<style>.i3gcam9kv {
  d: path("M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.kdybz_aht {
  d: path("M9 17h6");
}

.ocdsodbqf {
  d: path("M8 7h8v6H8Z");
}

.plm2iwzdt {
  fill: currentColor;
  d: path("M8 7h8v6H8Z");
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

.vae188bne {
  fill: currentColor;
  d: path("M5 5a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="vae188bne"/><path class="plm2iwzdt"/><path class="i3gcam9kv"/><path class="ocdsodbqf"/><path class="kdybz_aht"/></g>`,
		"fallback": "iconmind:power-switch-duotone-bold",
	});
}

export default Component;
