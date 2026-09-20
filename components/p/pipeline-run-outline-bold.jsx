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
		"content": `<style>.bsy-cccko {
  d: path("m6 9 3 3 -3 3Z");
}

.i0gx68gak {
  d: path("M14 12h4");
}

.m27ljac1c {
  d: path("m18 9 3 3 -3 3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vryjydbyu {
  d: path("M2 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="vryjydbyu"/><path class="bsy-cccko"/><path class="i0gx68gak"/><path class="m27ljac1c"/></g>`,
		"fallback": "iconmind:pipeline-run-outline-bold",
	});
}

export default Component;
