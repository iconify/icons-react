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
		"content": `<style>.dxrv6e9dn {
  d: path("M7 5v3h2.5");
}

.ecph9tq5i {
  d: path("M3 18h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lnxt6xb6t {
  d: path("M3 5v3h2.5");
}

.n-7t0yb1r {
  d: path("M3 13h18");
}
</style><g class="hntgybcog"><path class="lnxt6xb6t"/><path class="dxrv6e9dn"/><path class="n-7t0yb1r"/><path class="ecph9tq5i"/></g>`,
		"fallback": "iconmind:text-quote-outline-thin",
	});
}

export default Component;
