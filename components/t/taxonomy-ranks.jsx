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

.scgtecctb {
  d: path("M9 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0M2.5 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m13 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.wy-fvccem {
  d: path("M12 8.5v4M5.5 15v-2.5h13V15");
}
</style><g class="hntgybcog"><path class="scgtecctb"/><path class="wy-fvccem"/></g>`,
		"fallback": "uix:taxonomy-ranks",
	});
}

export default Component;
