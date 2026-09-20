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

.l0zc9ibud {
  d: path("M8 10h8");
}

.tb5ui_brh {
  d: path("M8 13h4");
}

.uimfufecn {
  d: path("M8 16h7");
}

.y4_6s7b5v {
  d: path("M4 5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.yofe7y69p {
  d: path("M8 7h6");
}
</style><g class="hntgybcog"><path class="y4_6s7b5v"/><path class="yofe7y69p"/><path class="l0zc9ibud"/><path class="tb5ui_brh"/><path class="uimfufecn"/></g>`,
		"fallback": "iconmind:poetry-outline-thin",
	});
}

export default Component;
