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
		"content": `<style>.cxyu2ib7h {
  d: path("M17 7v12");
}

.euj6eqbac {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 7v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.it88l1wbh {
  d: path("M7 7v10");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.moc63lp3w {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 7v14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nbib5l08z {
  d: path("M12 7v14");
}

.r0_oskb4z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 4h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sv2vrddhu {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M17 7v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="r0_oskb4z"/><path class="euj6eqbac"/><path class="moc63lp3w"/><path class="sv2vrddhu"/><path class="mg7aqnbsf"/><path class="it88l1wbh"/><path class="nbib5l08z"/><path class="cxyu2ib7h"/></g>`,
		"fallback": "iconmind:logprobs-duotone-thin",
	});
}

export default Component;
