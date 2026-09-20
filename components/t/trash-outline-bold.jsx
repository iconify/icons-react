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
		"content": `<style>.ew8lc9fxa {
  d: path("M10 11v6");
}

.fpad0ccyb {
  d: path("M14 11v6");
}

.k6nj2fbya {
  d: path("M3 5h18");
}

.rnnki-bvy {
  d: path("M6 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="rnnki-bvy"/><path class="k6nj2fbya"/><path class="ew8lc9fxa"/><path class="fpad0ccyb"/></g>`,
		"fallback": "iconmind:trash-outline-bold",
	});
}

export default Component;
