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
		"content": `<style>.be306ynmy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c1g0k8fft {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 15h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d223d_x9q {
  d: path("M3 12h6");
}

.ecph9tq5i {
  d: path("M3 18h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nuz6-76is {
  d: path("M15 12h6");
}

.nx1eh8hxp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M15 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.sixdm4bhp {
  d: path("M3 9h14");
}

.st2_lbcfm {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 18h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.thz-qac8s {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.vk-tazw8e {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 9h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.yngda3bvc {
  d: path("M3 15h18");
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="vk-tazw8e"/><path class="thz-qac8s"/><path class="nx1eh8hxp"/><path class="c1g0k8fft"/><path class="st2_lbcfm"/><path class="xgrfb-bqu"/><path class="sixdm4bhp"/><path class="d223d_x9q"/><path class="nuz6-76is"/><path class="yngda3bvc"/><path class="ecph9tq5i"/></g>`,
		"fallback": "iconmind:semantic-chunk-duotone-regular",
	});
}

export default Component;
