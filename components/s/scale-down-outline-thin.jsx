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
		"content": `<style>.hkvc1pb_a {
  d: path("M7 13v4h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ygf6n4b0k {
  d: path("M17 7 7 17");
}
</style><g class="hntgybcog"><path class="vyks9vbfn"/><path class="ygf6n4b0k"/><path class="hkvc1pb_a"/></g>`,
		"fallback": "iconmind:scale-down-outline-thin",
	});
}

export default Component;
