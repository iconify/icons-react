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
		"content": `<style>.fw_wgnb2f {
  d: path("M2 5a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ml617mhdr {
  d: path("M7 15a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H9a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vgrmyb3pe {
  d: path("M20.5 4v16");
}
</style><g class="s0phu2bbs"><path class="fw_wgnb2f"/><path class="ml617mhdr"/><path class="vgrmyb3pe"/></g>`,
		"fallback": "iconmind:turn-limit-outline-bold",
	});
}

export default Component;
