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

.ih1lrlw7a {
  d: path("M3 11a2 2 0 0 1 2-2h3.5l2 2H19a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.oqervpm8v {
  d: path("M11.5 11V7.5A1.5 1.5 0 0 1 13 6h2a1.5 1.5 0 0 1 1.5 1.5V11");
}

.xwbhlkbed {
  d: path("M19.5 11V4.5A1.5 1.5 0 0 0 18 3h-3a1.5 1.5 0 0 0-1.5 1.5V6");
}
</style><g class="hntgybcog"><path class="ih1lrlw7a"/><path class="oqervpm8v"/><path class="xwbhlkbed"/></g>`,
		"fallback": "uix:postman-collection",
	});
}

export default Component;
