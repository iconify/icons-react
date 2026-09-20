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
		"content": `<style>.eawry1bwu {
  d: path("M8 3.33a3.5 3.5 0 1 1 -2.96 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ww6qi_bzz {
  d: path("M10 11h11l-4 4v5h-3v-5Z");
}
</style><g class="hntgybcog"><path class="eawry1bwu"/><path class="ww6qi_bzz"/></g>`,
		"fallback": "iconmind:triage-agent-outline-thin",
	});
}

export default Component;
