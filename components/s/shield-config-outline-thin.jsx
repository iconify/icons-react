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
		"content": `<style>.c0j5uhb3y {
  d: path("M13.5 7.5v4");
}

.epr-ge8_k {
  d: path("M10.5 11.5v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5he4mb3o {
  d: path("M9 9.5h6");
}

.w0sebyb3m {
  d: path("M9 13.5h6");
}

.ymp2b4b6u {
  d: path("M15 5h5v8l-8 8 -8 -8V5h5");
}
</style><g class="hntgybcog"><path class="ymp2b4b6u"/><path class="v5he4mb3o"/><path class="c0j5uhb3y"/><path class="w0sebyb3m"/><path class="epr-ge8_k"/></g>`,
		"fallback": "iconmind:shield-config-outline-thin",
	});
}

export default Component;
