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
		"content": `<style>.a0z9iab1m {
  d: path("M14 2h2.5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3h-9a3 3 0 0 1 -3 -3V5a3 3 0 0 1 3 -3H10");
}

.bd0xngasp {
  fill: currentColor;
  d: path("m10.5 5.5 3 3 -3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.drjiz3bcf {
  d: path("M12 21h2.5");
}

.e2nq-yvbg {
  d: path("M12 15v6");
}

.kahwo0b4y {
  d: path("m10.5 5.5 3 3 -3 3Z");
}

.lmrvcn97u {
  fill: currentColor;
  d: path("M14 2h2.5a3 3 0 0 1 3 3v7a3 3 0 0 1 -3 3h-9a3 3 0 0 1 -3 -3V5a3 3 0 0 1 3 -3H10");
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

.xidycypec {
  d: path("M12 18h3");
}
</style><g class="s0phu2bbs"><path class="lmrvcn97u"/><path class="bd0xngasp"/><path class="a0z9iab1m"/><path class="e2nq-yvbg"/><path class="xidycypec"/><path class="drjiz3bcf"/><path class="kahwo0b4y"/></g>`,
		"fallback": "iconmind:key-run-duotone-bold",
	});
}

export default Component;
