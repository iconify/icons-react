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
		"content": `<style>.aq93qgbvy {
  fill: currentColor;
  d: path("M14 13a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.c9rt-wbve {
  d: path("M2 13a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.fddb2ca0n {
  d: path("M3.5 11a2.5 2.5 0 0 1 5 0");
}

.fkf_gcbra {
  d: path("M10 15h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uk9xnrm3r {
  d: path("M14 13a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.xyp2pm_yf {
  d: path("M15.5 11a2.5 2.5 0 0 1 5 0");
}

.z26heubln {
  fill: currentColor;
  d: path("M2 13a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="z26heubln"/><path class="aq93qgbvy"/><path class="c9rt-wbve"/><path class="fddb2ca0n"/><path class="uk9xnrm3r"/><path class="xyp2pm_yf"/><path class="fkf_gcbra"/></g>`,
		"fallback": "iconmind:mtls-duotone-bold",
	});
}

export default Component;
