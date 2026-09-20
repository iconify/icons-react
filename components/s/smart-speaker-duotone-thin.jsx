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
		"content": `<style>.c4khiwgvb {
  d: path("M8 15h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nj-8yn50i {
  d: path("M6 8c0 -2 12 -2 12 0v11c0 2 -12 2 -12 0Z");
}

.u2j6nmbhr {
  d: path("M6 8c0 2 12 2 12 0");
}

.wo5a1lb8y {
  fill: currentColor;
  d: path("M6 8c0 -2 12 -2 12 0v11c0 2 -12 2 -12 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="wo5a1lb8y"/><path class="nj-8yn50i"/><path class="u2j6nmbhr"/><path class="c4khiwgvb"/></g>`,
		"fallback": "iconmind:smart-speaker-duotone-thin",
	});
}

export default Component;
