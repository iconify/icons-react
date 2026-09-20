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

.evhnnfbqm {
  fill: currentColor;
  d: path("m6 9 3 3 -3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i0gx68gak {
  d: path("M14 12h4");
}

.m27ljac1c {
  d: path("m18 9 3 3 -3 3");
}

.mtpp5wbuo {
  fill: currentColor;
  d: path("M2 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vryjydbyu {
  d: path("M2 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="mtpp5wbuo"/><path class="evhnnfbqm"/><path class="vryjydbyu"/><path class="bsy-cccko"/><path class="i0gx68gak"/><path class="m27ljac1c"/></g>`,
		"fallback": "iconmind:pipeline-run-duotone-thin",
	});
}

export default Component;
