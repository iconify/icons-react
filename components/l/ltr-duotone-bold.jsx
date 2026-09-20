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
		"content": `<style>.afq3j6bva {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15.5 14.5 18 17l-2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d8abqfbpc {
  d: path("M3 11h18");
}

.eh0u862zq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 17h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ehxfnqbrv {
  d: path("M3 17h15");
}

.g55pkgb9q {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 11h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.khksl7boy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rx4ch-ouz {
  d: path("M15.5 14.5 18 17l-2.5 2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="s0phu2bbs"><path class="khksl7boy"/><path class="g55pkgb9q"/><path class="eh0u862zq"/><path class="afq3j6bva"/><path class="xgrfb-bqu"/><path class="d8abqfbpc"/><path class="ehxfnqbrv"/><path class="rx4ch-ouz"/></g>`,
		"fallback": "iconmind:ltr-duotone-bold",
	});
}

export default Component;
