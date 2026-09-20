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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lzdsnnb7v {
  d: path("M11 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.uk7acdcay {
  d: path("M8 4H4v16h4");
}
</style><g class="hntgybcog"><path class="uk7acdcay"/><path class="lzdsnnb7v"/><path class="epou1mbuy"/><path class="b4de0eyhw"/></g>`,
		"fallback": "iconmind:namespace-code-outline-thin",
	});
}

export default Component;
