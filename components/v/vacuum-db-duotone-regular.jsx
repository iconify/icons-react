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
		"content": `<style>.aqrf9ebcv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 8h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.jdpjh1bio {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 21h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mg7aqnbsf {
  d: path("M3 4h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o3x_gzblq {
  d: path("m8 13 4 4 4 -4");
}

.pen5ukb_h {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 10v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qik8460ao {
  d: path("M5 21h14");
}

.s1ajs51ib {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 4h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t0-mwc0xy {
  d: path("M12 10v6");
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.z07djwbph {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m8 13 4 4 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="s1ajs51ib"/><path class="aqrf9ebcv"/><path class="pen5ukb_h"/><path class="z07djwbph"/><path class="jdpjh1bio"/><path class="mg7aqnbsf"/><path class="vhnbtvbtn"/><path class="t0-mwc0xy"/><path class="o3x_gzblq"/><path class="qik8460ao"/></g>`,
		"fallback": "iconmind:vacuum-db-duotone-regular",
	});
}

export default Component;
