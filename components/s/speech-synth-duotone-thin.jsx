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
		"content": `<style>.b-hhewb1r {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16.12 9.88a3 3 0 0 1 0 4.24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cgo7j9jrv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M18.95 7.05a7 7 0 0 1 0 9.9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gz_3g7rgs {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 14h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.in54tzb-f {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 10h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mu-p7sbhe {
  d: path("M16.12 9.88a3 3 0 0 1 0 4.24");
}

.ni7913pru {
  d: path("M3 14h5");
}

.qm17m3bad {
  d: path("M18.95 7.05a7 7 0 0 1 0 9.9");
}

.wt9oil39f {
  d: path("M3 10h5");
}
</style><g class="hntgybcog"><path class="in54tzb-f"/><path class="gz_3g7rgs"/><path class="b-hhewb1r"/><path class="cgo7j9jrv"/><path class="wt9oil39f"/><path class="ni7913pru"/><path class="mu-p7sbhe"/><path class="qm17m3bad"/></g>`,
		"fallback": "iconmind:speech-synth-duotone-thin",
	});
}

export default Component;
