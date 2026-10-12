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
		"content": `<style>.b1g9m1bqw {
  cx: 7px;
  cy: 19.5px;
  r: 1.5px;
}

.epmaifbxu {
  d: path("M6 8h12M2.75 11h18.5M7 11v7m10-7v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.otw2wcc-c {
  cx: 17px;
  cy: 19.5px;
  r: 1.5px;
}
</style><g class="hntgybcog"><path class="epmaifbxu"/><circle class="b1g9m1bqw"/><circle class="otw2wcc-c"/></g>`,
		"fallback": "iconoven:stretcher",
	});
}

export default Component;
