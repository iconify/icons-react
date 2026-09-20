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

.h0co0sh-j {
  d: path("m20.5 9.5 -3 3");
}

.klk7mdb2c {
  d: path("m17.5 9.5 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nvf10bccv {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m20.5 9.5 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qnmmmsbha {
  d: path("M3 11h11");
}

.raxic1buh {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m17.5 9.5 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tbe304aqf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 16h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wxx-lxpns {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 11h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.ys-dg812g {
  d: path("M3 16h18");
}
</style><g class="nrj6p8qat"><path class="be306ynmy"/><path class="wxx-lxpns"/><path class="raxic1buh"/><path class="nvf10bccv"/><path class="tbe304aqf"/><path class="xgrfb-bqu"/><path class="qnmmmsbha"/><path class="klk7mdb2c"/><path class="h0co0sh-j"/><path class="ys-dg812g"/></g>`,
		"fallback": "iconmind:tombstone-duotone-regular",
	});
}

export default Component;
