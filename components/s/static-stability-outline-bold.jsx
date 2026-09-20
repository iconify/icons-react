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
		"content": `<style>.b51mjibkt {
  d: path("M8 10a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.cs3crkb9d {
  d: path("m13.5 18 -2 2 2 2");
}

.kjjsomb8f {
  d: path("M3 4h7.5");
}

.na65nl0eo {
  d: path("M13.5 20H21");
}

.p3zi2gbag {
  d: path("m10.5 2 2 2 -2 2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="b51mjibkt"/><path class="kjjsomb8f"/><path class="p3zi2gbag"/><path class="na65nl0eo"/><path class="cs3crkb9d"/></g>`,
		"fallback": "iconmind:static-stability-outline-bold",
	});
}

export default Component;
