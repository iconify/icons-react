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
		"content": `<style>.a6z1jcjqs {
  d: path("M8 16a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2Z");
}

.b6cdzhbpu {
  d: path("M10 14v-2.5h4V14");
}

.gs2u-ebtp {
  d: path("M4.5 8.5a7.5 7.5 0 0 1 15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ldyahhf1z {
  d: path("M4.5 8.5h15");
}
</style><g class="hntgybcog"><path class="gs2u-ebtp"/><path class="ldyahhf1z"/><path class="a6z1jcjqs"/><path class="b6cdzhbpu"/></g>`,
		"fallback": "iconmind:travel-insurance-outline-thin",
	});
}

export default Component;
