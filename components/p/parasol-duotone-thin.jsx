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
		"content": `<style>.atsab9b_m {
  d: path("M3 12q3 3 6 0 3 3 6 0 3 3 6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m3s7nnbex {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12q3 3 6 0 3 3 6 0 3 3 6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qxhe48bjs {
  d: path("M12 14v7");
}

.rcjv44b9n {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12a9 9 0 0 1 18 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t9gnp4b0n {
  d: path("M3 12a9 9 0 0 1 18 0");
}

.vl47r8b0v {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 14v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="rcjv44b9n"/><path class="m3s7nnbex"/><path class="vl47r8b0v"/><path class="t9gnp4b0n"/><path class="atsab9b_m"/><path class="qxhe48bjs"/></g>`,
		"fallback": "iconmind:parasol-duotone-thin",
	});
}

export default Component;
