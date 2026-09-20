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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vf2cjpyzu {
  d: path("M3 3h18v12l-6 6H3Z");
}

.ya-dvabix {
  fill: currentColor;
  d: path("M3 3h18v12l-6 6H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ya5oksyke {
  d: path("M21 15h-6v6");
}
</style><g class="hntgybcog"><path class="ya-dvabix"/><path class="vf2cjpyzu"/><path class="ya5oksyke"/></g>`,
		"fallback": "iconmind:sticky-note-duotone-thin",
	});
}

export default Component;
