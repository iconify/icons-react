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
		"content": `<style>.b4de0eyhw {
  d: path("M16 4h4v16h-4");
}

.f0_7ifg4g {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 4h4v16h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lxtc-wp5b {
  d: path("m10 10 4 4");
}

.pv7_hab2r {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8 4H4v16h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s-cqkabbd {
  d: path("m14 10 -4 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tx6qscbul {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m14 10 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uk7acdcay {
  d: path("M8 4H4v16h4");
}

.v_e4fzbym {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m10 10 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="pv7_hab2r"/><path class="f0_7ifg4g"/><path class="v_e4fzbym"/><path class="tx6qscbul"/><path class="uk7acdcay"/><path class="b4de0eyhw"/><path class="lxtc-wp5b"/><path class="s-cqkabbd"/></g>`,
		"fallback": "iconmind:socket-close-duotone-bold",
	});
}

export default Component;
