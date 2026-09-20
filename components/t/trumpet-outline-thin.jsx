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
		"content": `<style>.akyaa-boy {
  d: path("M13 11H2v4h11");
}

.gstzuxb9r {
  d: path("M5 7v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ldq326b0y {
  d: path("M9 7v4");
}

.nuk2gwb4b {
  d: path("m13 9 6 -6v18l-6 -6Z");
}
</style><g class="hntgybcog"><path class="akyaa-boy"/><path class="nuk2gwb4b"/><path class="gstzuxb9r"/><path class="ldq326b0y"/></g>`,
		"fallback": "iconmind:trumpet-outline-thin",
	});
}

export default Component;
