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
		"content": `<style>.enh0e8a0v {
  d: path("M21 5v3");
}

.hczrfxb9f {
  d: path("M8 5v15h8V5");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.kif6g-eik {
  d: path("M3 5v3");
}

.qtxvlht3c {
  d: path("M8 17h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="k6nj2fbya"/><path class="kif6g-eik"/><path class="enh0e8a0v"/><path class="hczrfxb9f"/><path class="qtxvlht3c"/></g>`,
		"fallback": "iconmind:towel-rail-outline-bold",
	});
}

export default Component;
