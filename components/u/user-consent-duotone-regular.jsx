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
		"content": `<style>.bntsv6jhb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 13 2 2 3.5 -3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bx_argeyt {
  d: path("M4 15a4 4 0 0 1 8 0");
}

.d4rfzbb0c {
  d: path("M6 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.l46grxbhs {
  fill: currentColor;
  d: path("M6 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.upu8uhb6u {
  d: path("m14 13 2 2 3.5 -3.5");
}

.xqswgyboz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 15a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="l46grxbhs"/><path class="xqswgyboz"/><path class="bntsv6jhb"/><path class="d4rfzbb0c"/><path class="bx_argeyt"/><path class="upu8uhb6u"/></g>`,
		"fallback": "iconmind:user-consent-duotone-regular",
	});
}

export default Component;
