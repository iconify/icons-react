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
		"content": `<style>.bnumaib7z {
  d: path("M9 13h6v6H9Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m3rd84bde {
  d: path("M4 21V8l4 -4h8l4 4v13");
}
</style><g class="hntgybcog"><path class="m3rd84bde"/><path class="bnumaib7z"/></g>`,
		"fallback": "iconmind:security-check-outline-thin",
	});
}

export default Component;
