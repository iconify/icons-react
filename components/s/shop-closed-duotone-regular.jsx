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
		"content": `<style>.a5c-jhmhz {
  d: path("m14 13 -4 4");
}

.am603abae {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 8v14h16V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e06o29xir {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gjjx1zbjy {
  d: path("m10 13 4 4");
}

.jhpa89did {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m14 13 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.te86mq-dq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10 13 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tp7101bon {
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
}

.yb0d-pkkp {
  d: path("M4 8v14h16V8");
}
</style><g class="nrj6p8qat"><path class="e06o29xir"/><path class="am603abae"/><path class="te86mq-dq"/><path class="jhpa89did"/><path class="tp7101bon"/><path class="yb0d-pkkp"/><path class="gjjx1zbjy"/><path class="a5c-jhmhz"/></g>`,
		"fallback": "iconmind:shop-closed-duotone-regular",
	});
}

export default Component;
