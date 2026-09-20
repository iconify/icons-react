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
		"content": `<style>.fmlaifbpn {
  d: path("M12 16v4");
}

.hya5w9myb {
  d: path("M9 13c-2 -2 -1 -5 1 -7h4c2 2 3 5 1 7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q2602seyu {
  fill: currentColor;
  d: path("M9 13c-2 -2 -1 -5 1 -7h4c2 2 3 5 1 7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qdn88l2uv {
  d: path("M7 20h10");
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="nrj6p8qat"><path class="q2602seyu"/><path class="hya5w9myb"/><path class="ys-dg812g"/><path class="fmlaifbpn"/><path class="qdn88l2uv"/></g>`,
		"fallback": "iconmind:pottery-wheel-duotone-regular",
	});
}

export default Component;
