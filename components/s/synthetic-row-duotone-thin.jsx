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
		"content": `<style>.bt_2bvgpa {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.epwe3rblo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 9h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eylqpv51p {
  d: path("M11 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ix782hbkz {
  d: path("M5 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.j835zw5-z {
  d: path("M3 9h18");
}

.ktzvm-xej {
  d: path("M17 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.mph_12lti {
  fill: currentColor;
  d: path("M5 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qaekcdczc {
  fill: currentColor;
  d: path("M17 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r0_oskb4z {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 4h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.x7kl1kqgv {
  fill: currentColor;
  d: path("M11 14a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="mph_12lti"/><path class="x7kl1kqgv"/><path class="qaekcdczc"/><path class="r0_oskb4z"/><path class="epwe3rblo"/><path class="bt_2bvgpa"/><path class="mg7aqnbsf"/><path class="j835zw5-z"/><path class="rkhcgsbdl"/><path class="ix782hbkz"/><path class="eylqpv51p"/><path class="ktzvm-xej"/></g>`,
		"fallback": "iconmind:synthetic-row-duotone-thin",
	});
}

export default Component;
