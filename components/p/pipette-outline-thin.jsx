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
		"content": `<style>.ac5nw33zc {
  d: path("M9 6a3 3 0 0 1 6 0");
}

.aut-6nhkz {
  d: path("M9 6h6v9l-3 3 -3 -3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pt-3kkb2k {
  d: path("M9 11h6");
}
</style><g class="hntgybcog"><path class="aut-6nhkz"/><path class="ac5nw33zc"/><path class="pt-3kkb2k"/></g>`,
		"fallback": "iconmind:pipette-outline-thin",
	});
}

export default Component;
