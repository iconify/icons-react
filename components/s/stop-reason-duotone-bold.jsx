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

.k0js09kko {
  d: path("M3 16h9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tsxowecww {
  fill: currentColor;
  d: path("M15 14h4v4h-4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.xms4a9qrp {
  d: path("M15 14h4v4h-4Z");
}
</style><g class="s0phu2bbs"><path class="tsxowecww"/><path class="xgrfb-bqu"/><path class="d8abqfbpc"/><path class="k0js09kko"/><path class="xms4a9qrp"/></g>`,
		"fallback": "iconmind:stop-reason-duotone-bold",
	});
}

export default Component;
