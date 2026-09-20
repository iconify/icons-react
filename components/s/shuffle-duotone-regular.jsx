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
		"content": `<style>.avq50ccio {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 17h6l9 -9h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d210vyb8t {
  d: path("m18 13 3 3 -3 3");
}

.fipykcbwt {
  d: path("M3 7h6l9 9h3");
}

.hs_3awbse {
  d: path("m18 5 3 3 -3 3");
}

.ig2rw3qjx {
  d: path("M3 17h6l9 -9h3");
}

.jl24-wygx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m18 5 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o-zv_3bmm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m18 13 3 3 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zgmc5964t {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 7h6l9 9h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="zgmc5964t"/><path class="o-zv_3bmm"/><path class="avq50ccio"/><path class="jl24-wygx"/><path class="fipykcbwt"/><path class="d210vyb8t"/><path class="ig2rw3qjx"/><path class="hs_3awbse"/></g>`,
		"fallback": "iconmind:shuffle-duotone-regular",
	});
}

export default Component;
