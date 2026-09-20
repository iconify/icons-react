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

.lnxt6xb6t {
  d: path("M3 5v3h2.5");
}

.n-7t0yb1r {
  d: path("M3 13h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qc-1i0btz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 13h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.st2_lbcfm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 18h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wzai94bgd {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M7 5v3h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x7vfm-s4a {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 5v3h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="x7vfm-s4a"/><path class="wzai94bgd"/><path class="qc-1i0btz"/><path class="st2_lbcfm"/><path class="lnxt6xb6t"/><path class="dxrv6e9dn"/><path class="n-7t0yb1r"/><path class="ecph9tq5i"/></g>`,
		"fallback": "iconmind:text-quote-duotone-regular",
	});
}

export default Component;
