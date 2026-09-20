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
		"content": `<style>.cvlwadsxk {
  fill: currentColor;
  d: path("M10 20a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.eff5yibna {
  fill: currentColor;
  d: path("M10 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.f965_vb7r {
  d: path("M8 11a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.fcstqn4mf {
  d: path("M18 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ib0uz7xmw {
  d: path("M10 20a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.jypkqlawl {
  fill: currentColor;
  d: path("M8 11a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2.5a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
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

.ph8xawbhr {
  fill: currentColor;
  d: path("M18 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pq9ly31-r {
  d: path("M10 4a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rsea1pbos {
  fill: currentColor;
  d: path("M2 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zuquf0b8s {
  d: path("M2 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="jypkqlawl"/><path class="eff5yibna"/><path class="cvlwadsxk"/><path class="rsea1pbos"/><path class="ph8xawbhr"/><path class="f965_vb7r"/><path class="pq9ly31-r"/><path class="ib0uz7xmw"/><path class="zuquf0b8s"/><path class="fcstqn4mf"/></g>`,
		"fallback": "iconmind:star-schema-duotone-regular",
	});
}

export default Component;
