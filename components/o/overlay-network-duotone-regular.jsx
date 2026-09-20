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
		"content": `<style>.au1c03bly {
  fill: currentColor;
  d: path("M17 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.d-ak2cbye {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m6 12 6 -6 6 6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dxdpz6gbz {
  d: path("M17 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.it83nbbll {
  d: path("M5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.kllnjy40b {
  fill: currentColor;
  d: path("M17 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
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

.o5h857ycu {
  d: path("M17 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.pmuiqo95v {
  d: path("M2 17h20");
}

.snqsppb6q {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 17h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uxcq0c75d {
  d: path("M5 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.vefr08bem {
  fill: currentColor;
  d: path("M5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vnyqt3_it {
  fill: currentColor;
  d: path("M5 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vq8t-6zzl {
  d: path("m6 12 6 -6 6 6");
}
</style><g class="nrj6p8qat"><path class="vnyqt3_it"/><path class="au1c03bly"/><path class="vefr08bem"/><path class="kllnjy40b"/><path class="snqsppb6q"/><path class="d-ak2cbye"/><path class="pmuiqo95v"/><path class="uxcq0c75d"/><path class="o5h857ycu"/><path class="vq8t-6zzl"/><path class="it83nbbll"/><path class="dxdpz6gbz"/></g>`,
		"fallback": "iconmind:overlay-network-duotone-regular",
	});
}

export default Component;
