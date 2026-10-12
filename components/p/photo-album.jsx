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
		"content": `<style>.b_zhkbf3c {
  d: path("M7.25 2.75v18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ll3_6zypj {
  d: path("M10.25 17h6.5");
}

.u74et4b5e {
  width: 6.5px;
  height: 6px;
  x: 10.25px;
  y: 7.25px;
  rx: 1px;
}

.w1ghlpbud {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="w1ghlpbud"/><path class="b_zhkbf3c"/><rect class="u74et4b5e"/><path class="ll3_6zypj"/></g>`,
		"fallback": "iconoven:photo-album",
	});
}

export default Component;
