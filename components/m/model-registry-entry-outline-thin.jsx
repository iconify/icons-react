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
		"content": `<style>.heotdacfg {
  d: path("m7 12.5 2 2 -2 2 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6fi9qmtq {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.mqtixbwqo {
  d: path("M2 8h20");
}

.vp2_usgcr {
  d: path("M12 14.5h6");
}
</style><g class="hntgybcog"><path class="k6fi9qmtq"/><path class="mqtixbwqo"/><path class="heotdacfg"/><path class="vp2_usgcr"/></g>`,
		"fallback": "iconmind:model-registry-entry-outline-thin",
	});
}

export default Component;
