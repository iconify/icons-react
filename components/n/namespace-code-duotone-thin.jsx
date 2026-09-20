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

.epou1mbuy {
  d: path("M11 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.h2epwum2e {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 4H4v16h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ibuanu9pl {
  fill: currentColor;
  d: path("M11 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lzdsnnb7v {
  d: path("M11 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.pnat86b0b {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 4h4v16h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ps2g__eqt {
  fill: currentColor;
  d: path("M11 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.uk7acdcay {
  d: path("M8 4H4v16h4");
}
</style><g class="hntgybcog"><path class="ibuanu9pl"/><path class="ps2g__eqt"/><path class="h2epwum2e"/><path class="pnat86b0b"/><path class="uk7acdcay"/><path class="lzdsnnb7v"/><path class="epou1mbuy"/><path class="b4de0eyhw"/></g>`,
		"fallback": "iconmind:namespace-code-duotone-thin",
	});
}

export default Component;
