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
		"content": `<style>.f6oxtkb2a {
  fill: currentColor;
  d: path("M8 7v14h8V7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.le629bcat {
  d: path("M8 7v14h8V7Z");
}

.n953y9b3y {
  d: path("M10 7V3h4v4");
}
</style><g class="hntgybcog"><path class="f6oxtkb2a"/><path class="le629bcat"/><path class="n953y9b3y"/><path class="l0v-b4kbr"/></g>`,
		"fallback": "iconmind:reusable-bottle-duotone-thin",
	});
}

export default Component;
