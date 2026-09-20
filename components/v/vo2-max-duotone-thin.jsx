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
		"content": `<style>.e7vch8rsw {
  d: path("M12 3v5m0 0c-4 0 -7 3 -7 7 0 3 1 5 4 5 2 0 3 -1 3 -4 0 3 1 4 3 4 3 0 4 -2 4 -5 0 -4 -3 -7 -7 -7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jnay8pbpe {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 3v5m0 0c-4 0 -7 3 -7 7 0 3 1 5 4 5 2 0 3 -1 3 -4 0 3 1 4 3 4 3 0 4 -2 4 -5 0 -4 -3 -7 -7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="jnay8pbpe"/><path class="e7vch8rsw"/></g>`,
		"fallback": "iconmind:vo2-max-duotone-thin",
	});
}

export default Component;
