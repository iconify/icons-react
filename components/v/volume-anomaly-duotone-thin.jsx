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
		"content": `<style>.b3figj0_h {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 14v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e8dcyvi8e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 3v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ejc7sbawl {
  d: path("M20 15v4");
}

.hb39b-bug {
  d: path("M12 3v16");
}

.hi99_8zvm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M20 15v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i-2uxcc_i {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 11v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ior14cbcm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lqktbo2ou {
  d: path("M16 12v7");
}

.mqwe1qbas {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 12v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ul-6megvv {
  d: path("M8 11v8");
}

.vezho9b5g {
  d: path("M4 14v5");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="hntgybcog"><path class="b3figj0_h"/><path class="i-2uxcc_i"/><path class="e8dcyvi8e"/><path class="mqwe1qbas"/><path class="hi99_8zvm"/><path class="ior14cbcm"/><path class="vezho9b5g"/><path class="ul-6megvv"/><path class="hb39b-bug"/><path class="lqktbo2ou"/><path class="ejc7sbawl"/><path class="z9ittvbis"/></g>`,
		"fallback": "iconmind:volume-anomaly-duotone-thin",
	});
}

export default Component;
