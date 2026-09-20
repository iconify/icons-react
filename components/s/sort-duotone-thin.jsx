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
		"content": `<style>.bj2hlhbfp {
  d: path("M3 12h12");
}

.cvqe-8bsy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 18h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d_scobift {
  d: path("M3 18h6");
}

.earhjk-cy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s2ztwmbwx {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="hntgybcog"><path class="earhjk-cy"/><path class="s2ztwmbwx"/><path class="cvqe-8bsy"/><path class="xgrfb-bqu"/><path class="bj2hlhbfp"/><path class="d_scobift"/></g>`,
		"fallback": "iconmind:sort-duotone-thin",
	});
}

export default Component;
