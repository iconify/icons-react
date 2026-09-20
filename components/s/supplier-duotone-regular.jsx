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
		"content": `<style>.am603abae {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 8v14h16V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c4khiwgvb {
  d: path("M8 15h8");
}

.e06o29xir {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.eljxzwbgp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 15h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.iq7hdacem {
  d: path("M10.5 12.5 8 15l2.5 2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tp7101bon {
  d: path("M2 5h20M2 5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0");
}

.w2lyggbtq {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10.5 12.5 8 15l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yb0d-pkkp {
  d: path("M4 8v14h16V8");
}
</style><g class="nrj6p8qat"><path class="e06o29xir"/><path class="am603abae"/><path class="eljxzwbgp"/><path class="w2lyggbtq"/><path class="tp7101bon"/><path class="yb0d-pkkp"/><path class="c4khiwgvb"/><path class="iq7hdacem"/></g>`,
		"fallback": "iconmind:supplier-duotone-regular",
	});
}

export default Component;
