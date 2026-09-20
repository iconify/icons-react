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
		"content": `<style>.d8abqfbpc {
  d: path("M3 11h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k0js09kko {
  d: path("M3 16h9");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.xms4a9qrp {
  d: path("M15 14h4v4h-4Z");
}
</style><g class="hntgybcog"><path class="xgrfb-bqu"/><path class="d8abqfbpc"/><path class="k0js09kko"/><path class="xms4a9qrp"/></g>`,
		"fallback": "iconmind:stop-reason-outline-thin",
	});
}

export default Component;
