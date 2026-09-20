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
		"content": `<style>.ewhabnb7p {
  fill: currentColor;
  d: path("M11.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
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

.nkayykbew {
  d: path("m3 19 7 -7");
}

.s9xdwbcyw {
  d: path("m3 5 7 7");
}

.uvhovrkef {
  d: path("M11.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0 -7 0");
}
</style><g class="hntgybcog"><path class="ewhabnb7p"/><path class="s9xdwbcyw"/><path class="nkayykbew"/><path class="uvhovrkef"/></g>`,
		"fallback": "iconmind:race-detect-duotone-thin",
	});
}

export default Component;
