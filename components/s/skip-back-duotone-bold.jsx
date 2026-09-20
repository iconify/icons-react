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
		"content": `<style>.azgrucbqu {
  d: path("M7 5v14");
}

.e80on1hgs {
  d: path("m18 5 -7 7 7 7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tcpmdzmak {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 5v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x79sj5p7p {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m18 5 -7 7 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="x79sj5p7p"/><path class="tcpmdzmak"/><path class="e80on1hgs"/><path class="azgrucbqu"/></g>`,
		"fallback": "iconmind:skip-back-duotone-bold",
	});
}

export default Component;
