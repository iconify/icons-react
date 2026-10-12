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

.v7qj7f6yx {
  d: path("M4.75 21.25H7.5");
}

.xawnb59pb {
  cx: 17.75px;
  cy: 19.75px;
  r: 1.5px;
}

.za4vntbgw {
  d: path("m6.1 20.25l1.65-12a1.75 1.75 0 0 1 1.75-1.5h5a1.75 1.75 0 0 1 1.75 1.5l1.5 10M7 13.25h9.5");
}
</style><g class="hntgybcog"><path class="za4vntbgw"/><circle class="xawnb59pb"/><path class="v7qj7f6yx"/></g>`,
		"fallback": "iconoven:walker-frame",
	});
}

export default Component;
