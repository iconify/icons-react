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
		"content": `<style>.ejc7sbawl {
  d: path("M20 15v4");
}

.hb39b-bug {
  d: path("M12 3v16");
}

.joz8zcc7f {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M20 15v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lqktbo2ou {
  d: path("M16 12v7");
}

.mbt4yzbhr {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 19h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.n7qztlbah {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 12v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ojxypvmis {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 3v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r01hhnbhf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 14v5");
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

.zxoerhiwi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 11v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="r01hhnbhf"/><path class="zxoerhiwi"/><path class="ojxypvmis"/><path class="n7qztlbah"/><path class="joz8zcc7f"/><path class="mbt4yzbhr"/><path class="vezho9b5g"/><path class="ul-6megvv"/><path class="hb39b-bug"/><path class="lqktbo2ou"/><path class="ejc7sbawl"/><path class="z9ittvbis"/></g>`,
		"fallback": "iconmind:volume-anomaly-duotone-regular",
	});
}

export default Component;
