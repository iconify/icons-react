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
		"content": `<style>.f99n1fbkg {
  d: path("M16 7h6");
}

.h_n9wsbvm {
  d: path("m4 13 6 -6a4 4 0 0 1 5 5l-6 6a4 4 0 0 1 -5 -5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pohupsbfv {
  d: path("M19 4v6");
}
</style><g class="hntgybcog"><path class="h_n9wsbvm"/><path class="pohupsbfv"/><path class="f99n1fbkg"/></g>`,
		"fallback": "iconmind:vitamin-outline-thin",
	});
}

export default Component;
