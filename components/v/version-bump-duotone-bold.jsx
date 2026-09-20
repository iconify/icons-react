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
		"content": `<style>.bso474_zi {
  fill: currentColor;
  d: path("M2 12a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.g5_a6d0kj {
  d: path("m14.5 10 2 -2 2 2");
}

.l18u6hsni {
  fill: currentColor;
  d: path("M13 6a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nbo3zob7q {
  d: path("M16.5 8v7");
}

.qyslyhbbq {
  d: path("M13 6a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yq5pecxxv {
  d: path("M2 12a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="bso474_zi"/><path class="l18u6hsni"/><path class="yq5pecxxv"/><path class="qyslyhbbq"/><path class="nbo3zob7q"/><path class="g5_a6d0kj"/></g>`,
		"fallback": "iconmind:version-bump-duotone-bold",
	});
}

export default Component;
